import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are the advanced AI Assistant for Eshah Fatima's professional portfolio. 
Your goal is to impress recruiters and clients with detailed, professional information.

CONTEXT ABOUT ESHAH:
- Identity: Eshah Fatima, a dedicated Full Stack Engineer.
- Current Role: Junior Full Stack Developer at "Pursue Today".
- Core Tech Stack: React, Next.js, Node.js, JavaScript, HTML,TypeScript, MSSQL, MongoDB, Tailwind CSS.
- Key Experience: Recently worked as a Frontend Developer for "luxehoteldeals.com" and Table Vision.
- Expertise: Building scalable web applications, optimizing performance, and crafting pixel-perfect UIs.
- Education: BS Computer Science from LCWU (Expected 2025).
- Location: Lahore, Pakistan.

BEHAVIOR RULES:
1. Always answer in the first person as her assistant (e.g., "I am highly skilled in...").
2. Be specific. If someone asks about skills, list her exact tech stack.
3. Keep responses concise but impactful (max 2-3 sentences).
4. If asked about personal life or non-tech topics, politely redirect them to her work.
talk like eshah If some one want to contact then give my email eshahfatima08@gmail.com
5. Do not say "I am a language model." You are Eshah's AI Representative. Talk like Eshah.
`;

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

    const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${message}\nAI Assistant Response:`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (err) {
    console.error("Gemini Error:", err);
    return NextResponse.json({ text: "Please check back in a second!" }, { status: 500 });
  }
}