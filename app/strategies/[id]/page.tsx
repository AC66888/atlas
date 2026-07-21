export default function StrategyDetailPage() {

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-5xl mx-auto">


        <h1 className="text-4xl font-bold">
          BTC Trend Following AI
        </h1>


        <p className="mt-4 text-zinc-400">
          AI-powered Bitcoin trend detection strategy.
        </p>



        <section className="mt-10 bg-zinc-900 rounded-xl p-6">

          <h2 className="text-2xl font-semibold">
            Strategy Overview
          </h2>


          <p className="mt-4 text-zinc-300">
            This strategy uses AI models to identify Bitcoin
            market trends and generate trading signals.
          </p>


        </section>




        <section className="mt-6 grid md:grid-cols-3 gap-5">


          <div className="bg-zinc-900 rounded-xl p-6">

            <p className="text-zinc-400">
              Backtest Return
            </p>

            <p className="text-3xl mt-3">
              +42%
            </p>

          </div>



          <div className="bg-zinc-900 rounded-xl p-6">

            <p className="text-zinc-400">
              Risk Level
            </p>

            <p className="text-3xl mt-3">
              Medium
            </p>

          </div>



          <div className="bg-zinc-900 rounded-xl p-6">

            <p className="text-zinc-400">
              Timeframe
            </p>

            <p className="text-3xl mt-3">
              4H
            </p>

          </div>


        </section>




        <section className="mt-10 bg-zinc-900 rounded-xl p-6">


          <h2 className="text-2xl font-semibold">
            Strategy Logic
          </h2>



          <div className="mt-5 space-y-3 text-zinc-300">


            <p>
              ✓ MA20 crosses above MA50 → Buy Signal
            </p>


            <p>
              ✓ RSI confirms momentum strength
            </p>


            <p>
              ✓ AI adjusts parameters according to market conditions
            </p>


            <p>
              ✓ Dynamic risk management
            </p>


          </div>


        </section>




        <section className="mt-10 bg-white text-black rounded-xl p-8">


          <h2 className="text-3xl font-bold">
            Ready to use this strategy?
          </h2>


          <p className="mt-3">
            Connect your account and let Atlas execute the strategy.
          </p>



          <button
            className="mt-6 bg-black text-white px-8 py-3 rounded-xl"
          >
            Use Strategy
          </button>


        </section>



      </div>


    </main>
  );
}