// globals.d.ts
interface AI {
  createTextSession: () => Promise<{
    prompt: (message: string) => Promise<string>;
  }>;
}

interface Window {
  ai: AI;
}
