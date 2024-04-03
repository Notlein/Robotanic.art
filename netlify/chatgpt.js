// Inside /netlify/functions/chatgpt.js
const { Configuration, OpenAIApi } = require("openai");

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const body = JSON.parse(event.body);
  const userMessage = body.message;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Respond positively to the following message: "${userMessage}"`,
      temperature: 0.7,
      max_tokens: 150,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.data.choices[0].text.trim() }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};
