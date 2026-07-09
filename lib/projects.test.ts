import { describe, expect, it } from "vitest";
import { getOrderedProjects, workProjects } from "./projects";

describe("workProjects", () => {
  it("includes GauntletAI fellowship projects with expected titles", () => {
    const fellowship = workProjects.filter((p) => p.tier === "fellowship");
    const titles = fellowship.map((p) => p.title);
    expect(titles).toEqual(
      expect.arrayContaining([
        "ShipShape",
        "LegacyLens",
        "AgentForge",
        "CollabBoard",
        "ChatBridge",
      ]),
    );
    expect(fellowship.length).toBeGreaterThanOrEqual(5);
  });

  it("marks every project with a non-empty id and summary", () => {
    for (const p of workProjects) {
      expect(p.id.length).toBeGreaterThan(0);
      expect(p.summary.length).toBeGreaterThan(0);
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });
});

describe("getOrderedProjects", () => {
  it("orders tiers: flagship, then fellowship, professional, portfolio", () => {
    // Flagship (the two live shipped apps) leads: it is the strongest
    // proof of work, so it renders first everywhere projects appear.
    const ordered = getOrderedProjects();
    const tiers = ordered.map((p) => p.tier);
    const firstIdx = (t: (typeof tiers)[number]) => tiers.indexOf(t);
    expect(firstIdx("flagship")).toBe(0);
    expect(firstIdx("fellowship")).toBeGreaterThan(firstIdx("flagship"));
    expect(firstIdx("professional")).toBeGreaterThan(firstIdx("fellowship"));
    expect(firstIdx("portfolio")).toBeGreaterThan(firstIdx("professional"));
  });

  it("flagship contains the two live apps with case studies", () => {
    const flagship = getOrderedProjects().filter((p) => p.tier === "flagship");
    expect(flagship.map((p) => p.id).sort()).toEqual(["oh-sheet", "tunechat"]);
    for (const p of flagship) {
      expect(p.caseStudyUrl).toMatch(/^\/projects\//);
      expect(p.imageSrc).toBeTruthy();
    }
  });
});
