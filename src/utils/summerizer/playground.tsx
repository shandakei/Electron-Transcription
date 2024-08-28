import React, { useState } from 'react';

const OpenAIComponent: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const fetchOpenAIResponse = async () => {
    try {
      const apiKey = process.env.VITE_OPENAI_API_KEY; // Ensure your API key is stored in a .env file

      const result = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: "Say this is a test!" }],
          temperature: 0.7,
        }),
      });

      const data = await result.json();
      setResponse(data.choices[0].message.content); // Assuming the response is in this structure
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
      setResponse("An error occurred while fetching data.");
    }
  };

  return (
    <div>
      <button onClick={fetchOpenAIResponse}>Fetch OpenAI Response</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default OpenAIComponent;
