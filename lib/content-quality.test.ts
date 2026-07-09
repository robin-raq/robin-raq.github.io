import { describe, expect, it } from "vitest";
import { workProjects } from "./projects";

const EM_DASH = "—";
const BANNED_PHRASES = [
  "seamless",
  "cutting edge",
  "leveraging",
  "robust",
  "unlock",
  "end to end",
  "end-to-end",
];
const PLACEHOLDER_PATTERNS = [/\bTODO\b/i, /\bPLACEHOLDER\b/i, /\bLOREM\b/i, /\bFIXME\b/i];

describe("project copy quality", () => {
  it("no em dashes in any project string fields", () => {
    for (const p of workProjects) {
      const fields: [string, string | undefined][] = [
        ["summary", p.summary],
        ["description", p.description],
        ["whatItShows", p.whatItShows],
        ["imageAlt", p.imageAlt],
      ];
      for (const [field, value] of fields) {
        if (!value) continue;
        expect(value, `${p.id}.${field} contains an em dash`).not.toContain(EM_DASH);
      }
    }
  });

  it("no banned marketing phrases in any project string fields", () => {
    for (const p of workProjects) {
      const fields: [string, string | undefined][] = [
        ["summary", p.summary],
        ["description", p.description],
        ["whatItShows", p.whatItShows],
      ];
      for (const [field, value] of fields) {
        if (!value) continue;
        for (const phrase of BANNED_PHRASES) {
          expect(
            value.toLowerCase(),
            `${p.id}.${field} contains banned phrase: "${phrase}"`,
          ).not.toContain(phrase.toLowerCase());
        }
      }
    }
  });

  it("no placeholder text in any project string fields", () => {
    for (const p of workProjects) {
      const fields: [string, string | undefined][] = [
        ["summary", p.summary],
        ["description", p.description],
        ["whatItShows", p.whatItShows],
      ];
      for (const [field, value] of fields) {
        if (!value) continue;
        for (const pattern of PLACEHOLDER_PATTERNS) {
          expect(value, `${p.id}.${field} contains placeholder text`).not.toMatch(pattern);
        }
      }
    }
  });

  it("project summaries are concise (under 160 chars)", () => {
    for (const p of workProjects) {
      expect(
        p.summary.length,
        `${p.id}.summary is ${p.summary.length} chars (limit 160)`,
      ).toBeLessThanOrEqual(160);
    }
  });

  it("flagship projects have imageSrc, imageAlt, and caseStudyUrl", () => {
    const flagships = workProjects.filter((p) => p.tier === "flagship");
    expect(flagships.length).toBeGreaterThan(0);
    for (const p of flagships) {
      expect(p.imageSrc, `${p.id} missing imageSrc`).toBeTruthy();
      expect(p.imageAlt, `${p.id} missing imageAlt`).toBeTruthy();
      expect(p.caseStudyUrl, `${p.id} missing caseStudyUrl`).toMatch(/^\/projects\//);
    }
  });

  it("flagship projects have description and whatItShows", () => {
    const flagships = workProjects.filter((p) => p.tier === "flagship");
    for (const p of flagships) {
      expect(p.description, `${p.id} missing description`).toBeTruthy();
      expect(p.whatItShows, `${p.id} missing whatItShows`).toBeTruthy();
    }
  });
});
