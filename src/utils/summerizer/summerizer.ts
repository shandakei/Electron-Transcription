import OpenAI from "openai";
require('dotenv').config();

// const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


const openai = new OpenAI({
    organization: "org-PqmBk3NSxA2oruuligJ5z05Y",
    project: "proj_aVnRR4IE5UzEBsakZNu1Xkfa",
    apiKey: process.env.VITE_OPENAI_API_KEY
});

async function main() {
  const messages: { role: string; content: string }[] = [
    { role: "user", content: "What's the weather like in Boston today?" }
  ];
  const tools: {
    name: string;
    description: string;
    parameters: {
      type: string;
      properties: {
        location: { type: string; description: string };
        unit: { type: string; enum: string[] };
      };
      required: string[];
    };
  }[] = [
    {
      name: "get_current_weather",
      description: "Get the current weather in a given location",
      parameters: {
        type: "object",
        properties: {
          location: { type: "string", description: "The city and state, e.g., San Francisco, CA" },
          unit: { type: "string", enum: ["celsius", "fahrenheit"] },
        },
        required: ["location"],
      },
    },
  ];
      
  

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: messages ,
    tools: tools,
    function_call: "auto",
  });

  console.log(response);
}

main();

