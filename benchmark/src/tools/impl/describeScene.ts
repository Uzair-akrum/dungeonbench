type DescribeSceneArgs = {
  scene: "combat" | "exploration" | "dialogue";
  description: string;
  charactersPresent: string[];
};

let sceneCounter = 0;

export function resetSceneCounter(): void {
  sceneCounter = 0;
}

export function describeScene(_args: DescribeSceneArgs): { sceneId: string; timestamp: string } {
  sceneCounter += 1;
  return {
    sceneId: `scene_${sceneCounter}`,
    timestamp: new Date().toISOString()
  };
}
