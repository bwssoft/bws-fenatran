import Link from "next/link";
import "@/app/lib/styles/space.css";

export default function MemoryGame() {
  return (
    <div className="memory-game-container memory-game-container-animated flex flex-col items-center justify-center min-h-screen p-6 text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 mb-8 drop-shadow-xl">
        Bem vindo ao BWSpace
      </h1>
      <Link
        href="/memory-game"
        className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
      >
        Jogar
      </Link>
    </div>
  );
}
