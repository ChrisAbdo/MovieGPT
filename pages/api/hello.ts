import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: "I am looking for movies that that fit the following description, can you give me a list of 5 with only the names and dates of the movies? The output should follow this format: Movie name, release year. Please only include the necessary info.: " + req.body.text,
    temperature: 0.7,
    top_p: 1,
   
    max_tokens: 256,
  });
  res.status(200).json({ result: completion.data });
}