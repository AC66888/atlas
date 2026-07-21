export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">

        <h1 className="text-6xl font-bold tracking-tight">
          Atlas
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          The AI Operating System for Crypto
        </p>

        <div className="mt-12">
          <input
            type="text"
            placeholder="Ask anything about crypto..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-lg outline-none focus:border-blue-500"
          />
        </div>

        <button className="mt-6 rounded-xl bg-white px-8 py-3 font-semibold text-black hover:bg-zinc-200 transition">
          Enter
        </button>

      </div>
    </main>
  );
}