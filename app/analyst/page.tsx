"use client";

import { useState } from "react";

export default function AnalystPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "你好，我是 Atlas AI Analyst。\n\n我可以帮助你分析：\n• Token趋势\n• 市场情绪\n• 链上数据\n• 交易策略",
    },
  ]);

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    const aiMessage = {
      role: "ai",
      text:
        "Atlas 正在分析 " +
        input +
        "...\n\n市场趋势：等待数据接入\n\n链上情况：正在分析\n\n风险提示：请结合自身策略判断。",
    };

    setMessages([
      ...messages,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold">
          Atlas AI Analyst
        </h1>

        <p className="mt-3 text-zinc-400">
          Your AI-powered crypto research assistant.
        </p>


        <div className="mt-10 space-y-4">

          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "ai"
                  ? "bg-zinc-900 rounded-xl p-5 whitespace-pre-line"
                  : "bg-blue-600 rounded-xl p-5"
              }
            >
              <div className="text-sm mb-2 opacity-70">
                {message.role === "ai"
                  ? "Atlas"
                  : "You"}
              </div>

              {message.text}

            </div>
          ))}

        </div>


        <div className="mt-8 flex gap-3">

          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key==="Enter"){
                sendMessage();
              }
            }}
            placeholder="Ask about BTC, ETH, market..."
            className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-5 py-4 outline-none"
          />

          <button
            onClick={sendMessage}
            className="rounded-xl bg-white text-black px-6 font-semibold"
          >
            Send
          </button>

        </div>


      </div>

    </main>
  );
}