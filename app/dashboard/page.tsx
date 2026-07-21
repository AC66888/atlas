export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center">

          <h1 className="text-4xl font-bold">
            Atlas
          </h1>

          <nav className="flex gap-6 text-zinc-400">

            <span className="text-white">
              Dashboard
            </span>

            <a href="/analyst">
              Analyst
            </a>

            <span>
              Strategies
            </span>

            <span>
              On-chain
            </span>

          </nav>

        </div>


        {/* Market */}

        <section className="mt-12">

          <h2 className="text-2xl font-semibold">
            Market Overview
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">


            <div className="bg-zinc-900 rounded-xl p-6">
              <p className="text-zinc-400">
                Bitcoin
              </p>

              <p className="text-3xl mt-3">
                BTC
              </p>

              <p className="mt-2">
                Market Leader
              </p>
            </div>



            <div className="bg-zinc-900 rounded-xl p-6">

              <p className="text-zinc-400">
                Ethereum
              </p>

              <p className="text-3xl mt-3">
                ETH
              </p>

              <p className="mt-2">
                Smart Contract
              </p>

            </div>




            <div className="bg-zinc-900 rounded-xl p-6">

              <p className="text-zinc-400">
                Solana
              </p>

              <p className="text-3xl mt-3">
                SOL
              </p>

              <p className="mt-2">
                High Performance
              </p>

            </div>


          </div>

        </section>



        {/* AI Signals */}

        <section className="mt-12">


          <h2 className="text-2xl font-semibold">
            AI Signals
          </h2>


          <div className="mt-6 space-y-4">


            <div className="bg-zinc-900 rounded-xl p-5">
              🔥 BTC trend analysis available
            </div>


            <div className="bg-zinc-900 rounded-xl p-5">
              ⚠ Market volatility increasing
            </div>


            <div className="bg-zinc-900 rounded-xl p-5">
              📈 AI searching opportunities
            </div>


          </div>


        </section>



        {/* Analyst Entry */}

        <section className="mt-12">

          <div className="bg-white text-black rounded-xl p-8">

            <h2 className="text-3xl font-bold">
              Ask Atlas AI
            </h2>


            <p className="mt-3">
              Analyze markets with AI intelligence.
            </p>


            <a
              href="/analyst"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl"
            >
              Open Analyst
            </a>


          </div>


        </section>



      </div>


    </main>
  );
}