// Inside /netlify/functions/chatgpt.js
const { OpenAI } = require("openai");

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Parse the request body
  const body = JSON.parse(event.body);
  const userMessage = body.message;

  // Configure the OpenAI API with your API key

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
  });
  
  try {
    // Sending the user message to OpenAI API and generating a response
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Consider using the latest model for improved responses
      messages: [{ role: 'user', content: `Respond positively to the following message by trying to cheer up, talk about nurturing, taking your time and rate the toxicity where -5 is non-toxic and 5 is toxic conversation: "${userMessage}"` }],
      temperature: 0.9,
      max_tokens: 250
    });
    // Return the API response
    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.choices[0].message }),
    };
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error calling OpenAI:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};
