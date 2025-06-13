// api/generate.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
  // Ustawiamy aby output nie był FileOutput, tylko zwykłe URL-e
  useFileOutput: false,
});

const MODEL_ID = 'stability-ai/stable-diffusion';
const MODEL_VERSION = 'ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { prompt } = req.body as { prompt?: string };

  if (!prompt?.trim()) {
    return res.status(400).json({ error: 'prompt required' });
  }
  const finalPrompt = `(${prompt.trim()}:1.5), (monochrome tattoo flash:1.2), (clean linework:1.1), (no background:1.05), [color:0.5], [photorealism:0.5]`;

  const negativePrompt = `(color:1.0), (photorealism:1.0), (3d:1.0), (cartoon:1.0), (background:1.0), (text:1.0), (watermark:1.0)`;
;

  try {
    const output = await replicate.run(`${MODEL_ID}:${MODEL_VERSION}`, {
      input: {
        prompt: finalPrompt,
  negative_prompt: negativePrompt,
  width: 512,
  height: 512,
  num_outputs: 1,
  guidance_scale: 7.5,
  num_inference_steps: 50,
  scheduler: 'K_EULER',
      },
    }) as string[];

    console.log("🧪 replicate output:", output);

    if (!Array.isArray(output) || typeof output[0] !== "string") {
      throw new Error("Output z Replicate nie zawiera prawidłowego URL");
    }

    return res.status(200).json({ imageUrl: output[0] });
  } catch (err: unknown) {
    console.error("Generation error:", err);
    const message = err instanceof Error ? err.message : 'replicate error';
    return res.status(500).json({ error: message });
  }
}