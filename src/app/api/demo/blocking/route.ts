import {generateText} from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google=createGoogleGenerativeAI({
    apiKey:process.env.GOOGLE_GEMINI_API_KEY
})
export async function POST(){
    const response=await generateText({
        model:google('gemini-2.5-flash',),
        prompt:"tell me who is going to win the 2026 FIFA World cup",
      
    })

    return Response.json({response});
}