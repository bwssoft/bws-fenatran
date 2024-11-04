import "@/app/lib/styles/space.css";
import { LeadForm } from "./lib/ui/forms/lead";
import Link from "next/link";

export default function MemoryGame() {
  return (
    <div className="memory-game-container memory-game-container-animated flex flex-col items-center justify-center min-h-screen p-6 text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 mb-8 drop-shadow-xl py-2">
        Bem vindo ao BWSpace
      </h1>
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 mb-8 drop-shadow-xl py-2 lg:absolute lg:top-72 lg:text-7xl">
        Jogue
        <br />
        e
        <br />
        GANHE um BONÉ!
      </h1>

      <LeadForm />
      <div className="flex mt-5 gap-4">
        <Link
          href={"/qr-code"}
          // className="w-full text-nowrap px-3 text-center py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500

          // "

          className="w-full shadow-2xl transition-all duration-200 text-nowrap p-3 px-5 text-center bg-black border-2 focus:ring-4 focus:ring-blue-500 border-gray-500 rounded-md font-medium text-white hover:bg-gray-900/40"
        >
          QR Code
        </Link>
        {/* <Link
          href={"/"}
          className="w-full text-nowrap px-3 text-center py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Jogo
        </Link> */}
      </div>
    </div>
  );
}
