import OpenAI from "openai";
// dotenv.config();

const openaiKey = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({
    organization: "org-PqmBk3NSxA2oruuligJ5z05Y",
    project: "proj_aVnRR4IE5UzEBsakZNu1Xkfa",
    apiKey: `${openaiKey}`,
    dangerouslyAllowBrowser: true
});


export default async function SendMessage() {
  try {
      // const response = await openai.chat.completions.create({
      //     model: "gpt-4o-mini",
      //     messages: [{ role: "user", content: "Say this is a test!" }],
      //     temperature: 0.7
      // })



      const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}` // Include your API key here
    },
    body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Say this is a test!" }],
        temperature: 0.7
    })
});

      const data = await response.json();
      console.log(data);
      console.log(response);
      console.log("not an error log, response error")
  } catch (error) {
    
      console.error("your shit didnt work again dude");
  }
}

// sendMessage();

