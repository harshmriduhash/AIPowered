import { CopilotBackend, OpenAIAdapter } from "@copilotkit/backend"; // Backend functionality with CopilotKit.
import { researchWithLangGraph } from "./research"; // Import a custom function for conducting research.
import { AnnotatedFunction } from "@copilotkit/shared"; // Correctly import the annotation.

export const runtime = "edge"; // Define the runtime environment.

const researchAction: AnnotatedFunction<string[]> = {
  name: "research",
  description: "Call this function to conduct research on a certain topic. Respect other notes about when to call this function.",
  implementation: (...args: string[]) => researchWithLangGraph(args[0]),
  argumentAnnotations: [
    {
      name: "topic",
      type: 'string', 
      description: "The topic to research. 5 characters or longer.",
      required: true,
    },
  ],
};
export async function POST(req: Request): Promise<Response> {
  const actions: AnnotatedFunction<any>[] = []; // Initialize an empty actions array.

  if (process.env["TAVILY_API_KEY"]) {
    actions.push(researchAction); // Add the action if the environment variable exists.
  }

  const copilotKit = new CopilotBackend({
    actions: actions,
  });

  return copilotKit.response(req, new OpenAIAdapter());
}
