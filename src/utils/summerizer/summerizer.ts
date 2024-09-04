import OpenAI from "openai";
import dotenv from 'dotenv';


dotenv.config();


const openai = new OpenAI({
    organization: "org-PqmBk3NSxA2oruuligJ5z05Y",
    project: "proj_aVnRR4IE5UzEBsakZNu1Xkfa",
    apiKey: import.meta.env.OPENAI_API_KEY
});



export default async function SendMessage() {
  try {
      const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: "Say this is a test!" }],
          temperature: 0.7
      });

      console.log(response);
      console.log("not an error log, response error")
  } catch (error) {
      console.error("your shit didnt work again dude");
  }
}

// sendMessage();

