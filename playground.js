
import OpenAI from "openai";
// require('dotenv').config();
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


const openai = new OpenAI({
    apiKey: apiKey
});

async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();





// export default function Summarizer({transcript}) {
    //     return (
        //         <>
//         {transcript}
//         </>
//     )
// }




// /////////////////
// {
//     "id": "chatcmpl-abc123",
//     "object": "chat.completion",
//     "created": 1699896916,
//     "model": "gpt-4o-mini",
//     "choices": [
//       {
//         "index": 0,
//         "message": {
//           "role": "assistant",
//           "content": null,
//           "tool_calls": [
//             {
//               "id": "call_abc123",
//               "type": "function",
//               "function": {
//                 "name": "get_current_weather",
//                 "arguments": "{\n\"location\": \"Boston, MA\"\n}"
//               }
//             }
//           ]
//         },
//         "logprobs": null,
//         "finish_reason": "tool_calls"
//       }
//     ],
//     "usage": {
//       "prompt_tokens": 82,
//       "completion_tokens": 17,
//       "total_tokens": 99
//     }
//   }
  