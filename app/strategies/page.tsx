export default function StrategiesPage() {

  const strategies = [
    {
      name: "BTC Trend Following AI",
      creator: "Atlas AI",
      returnRate: "+42%",
      risk: "Medium",
      description: "AI-powered Bitcoin trend detection strategy."
    },
    {
      name: "ETH Momentum Engine",
      creator: "Quant Lab",
      returnRate: "+28%",
      risk: "Low",
      description: "Captures Ethereum momentum opportunities."
    },
    {
      name: "Market Neutral Alpha",
      creator: "AlphaBot",
      returnRate: "+19%",
      risk: "Low",
      description: "Designed for stable market conditions."
    },
  ];


  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-6xl mx-auto">


        <h1 className="text-4xl font-bold">
          Atlas Quant Hub
        </h1>

        <p className="mt-3 text-zinc-400">
          Discover AI-powered crypto trading strategies.
        </p>



        <div className="grid md:grid-cols-3 gap-6 mt-10">


          {strategies.map((strategy, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-xl p-6"
            >


              <h2 className="text-xl font-bold">
                {strategy.name}
              </h2>


              <p className="mt-4 text-zinc-400">
                Creator:
                <span className="ml-2 text-white">
                  {strategy.creator}
                </span>
              </p>


              <p className="mt-3">
                Backtest Return:
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


              <p className="mt-4 text-zinc-400">
                {strategy.description}
              </p>


              <button
                className="mt-6 bg-white text-black px-5 py-3 rounded-xl"
              >
                View Strategy
              </button>


            </div>

          ))}


        </div>


      </div>


    </main>
  );
}