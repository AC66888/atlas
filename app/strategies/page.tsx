"use client";

import { useEffect, useState } from "react";


export default function StrategiesPage() {


  const defaultStrategies = [
    {
      name: "BTC Trend Following AI",
      creator: "Atlas AI",
      returnRate: "+42%",
      risk: "Medium",
      description:
        "AI-powered Bitcoin trend detection strategy.",
      link: "/strategies/btc-trend",
    },
    {
      name: "ETH Momentum Engine",
      creator: "Quant Lab",
      returnRate: "+28%",
      risk: "Low",
      description:
        "Captures Ethereum momentum opportunities.",
      link: "/strategies/eth-momentum",
    },
    {
      name: "Market Neutral Alpha",
      creator: "AlphaBot",
      returnRate: "+19%",
      risk: "Low",
      description:
        "Designed for stable market conditions.",
      link: "/strategies/market-neutral",
    },
  ];



  const [communityStrategies, setCommunityStrategies] =
    useState<any[]>([]);



  useEffect(() => {

    const saved =
      localStorage.getItem("atlas_strategy");


    if(saved){

      setCommunityStrategies([
        JSON.parse(saved)
      ]);

    }


  }, []);




  return (

    <main className="min-h-screen bg-black text-white p-8">


      <div className="max-w-6xl mx-auto">


        <h1 className="text-4xl font-bold">
          Atlas Quant Hub
        </h1>


        <p className="mt-3 text-zinc-400">
          Discover AI-powered crypto trading strategies.
        </p>




        <h2 className="text-2xl font-semibold mt-12">
          Featured Strategies
        </h2>



        <div className="grid md:grid-cols-3 gap-6 mt-6">


          {
            defaultStrategies.map((strategy,index)=>(

              <div
                key={index}
                className="bg-zinc-900 rounded-xl p-6"
              >

                <h3 className="text-xl font-bold">
                  {strategy.name}
                </h3>


                <p className="mt-4 text-zinc-400">
                  Creator:
                  <span className="ml-2 text-white">
                    {strategy.creator}
                  </span>
                </p>


                <p className="mt-3">
                  Return:
                  <span className="ml-2">
                    {strategy.returnRate}
                  </span>
                </p>


                <p className="mt-3">
                  Risk:
                  <span className="ml-2">
                    {strategy.risk}
                  </span>
                </p>


                <a
                  href={strategy.link}
                  className="mt-6 inline-block bg-white text-black px-5 py-3 rounded-xl"
                >
                  View Strategy
                </a>


              </div>

            ))
          }


        </div>





        {
          communityStrategies.length > 0 && (

            <section className="mt-12">


              <h2 className="text-2xl font-semibold">
                Community Strategies
              </h2>



              <div className="grid md:grid-cols-3 gap-6 mt-6">


                {
                  communityStrategies.map(
                    (strategy,index)=>(

                    <div
                      key={index}
                      className="bg-zinc-900 rounded-xl p-6"
                    >

                      <h3 className="text-xl font-bold">
                        {strategy.name}
                      </h3>


                      <p className="mt-4 text-zinc-400">
                        Creator:
                        <span className="ml-2 text-white">
                          {strategy.creator}
                        </span>
                      </p>


                      <p className="mt-3">
                        Return:
                        <span className="ml-2">
                          {strategy.returnRate}
                        </span>
                      </p>


                      <p className="mt-3">
                        Risk:
                        <span className="ml-2">
                          {strategy.risk}
                        </span>
                      </p>


                      <button
                        className="mt-6 bg-white text-black px-5 py-3 rounded-xl"
                      >
                        Use Strategy
                      </button>


                    </div>

                  ))
                }


              </div>


            </section>

          )
        }



      </div>


    </main>

  );

}