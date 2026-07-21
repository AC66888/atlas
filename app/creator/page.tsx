"use client";

import { useState } from "react";


export default function CreatorPage() {

  const [prompt, setPrompt] = useState("");
  const [strategy, setStrategy] = useState("");
  const [published, setPublished] = useState(false);



  function generateStrategy() {

    if (!prompt) return;


    setStrategy(
`Strategy Name:
BTC AI Trend Hunter


Market:
Bitcoin


Timeframe:
4H


Logic:

1. Detect market trend using moving averages

2. Confirm momentum with RSI indicator

3. Use volume changes as confirmation


Risk Management:

Stop Loss:
8%


Position Size:
Medium


Risk Level:
Medium


Backtest Status:

Simulation Ready`
    );


    setPublished(false);

  }



  function publishStrategy() {

    const newStrategy = {

      name: "BTC AI Trend Hunter",

      creator: "Community User",

      returnRate: "+25%",

      risk: "Medium",

      description:
      "AI generated crypto trading strategy.",

    };


    localStorage.setItem(
      "atlas_strategy",
      JSON.stringify(newStrategy)
    );


    setPublished(true);

  }



  return (

    <main className="min-h-screen bg-black text-white p-8">


      <div className="max-w-5xl mx-auto">


        <h1 className="text-4xl font-bold">
          Atlas Strategy Creator
        </h1>


        <p className="mt-3 text-zinc-400">
          Describe your idea and let AI design a crypto strategy.
        </p>



        <textarea

          value={prompt}

          onChange={(e)=>setPrompt(e.target.value)}

          placeholder="Example: Create a BTC strategy for bull markets with medium risk..."

          className="
          mt-10
          w-full
          h-40
          rounded-xl
          bg-zinc-900
          border
          border-zinc-700
          p-5
          text-white
          outline-none
          "

        />



        <button

          onClick={generateStrategy}

          className="
          mt-6
          bg-white
          text-black
          px-8
          py-3
          rounded-xl
          font-semibold
          "

        >

          Generate Strategy

        </button>




        {
          strategy && (

            <section className="mt-10 bg-zinc-900 rounded-xl p-8">


              <h2 className="text-2xl font-bold">
                Generated Strategy
              </h2>



              <pre className="mt-6 whitespace-pre-wrap text-zinc-300">
                {strategy}
              </pre>



              <button

                onClick={publishStrategy}

                className="
                mt-8
                bg-white
                text-black
                px-6
                py-3
                rounded-xl
                "

              >

                Publish Strategy

              </button>



              {
                published && (

                  <p className="mt-5 text-green-400">
                    Strategy published successfully!
                  </p>

                )
              }



            </section>

          )
        }



      </div>


    </main>

  );

}