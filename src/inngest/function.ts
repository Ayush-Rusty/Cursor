import { generateText } from "ai";
import { inngest } from "./client";
import { google } from "@ai-sdk/google";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate", triggers: { event: "demo/generate" } },
  async ({step }) => {
      await step.run("generate-text",async()=>{
        return await generateText({
            model:google("gemini-2.0-flash"),
            prompt:"write a blog explaining whats the importance of AI in todays world"
        })
      })
    });

