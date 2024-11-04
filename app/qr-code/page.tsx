import "@/app/lib/styles/space.css";
import Link from "next/link";

export default function QRCode() {
  return (
    <div className="memory-game-container memory-game-container-animated flex flex-col items-center justify-center min-h-screen gap-8 p-6 text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 drop-shadow-xl py-2">
        Acesse nosso jogo pelo QR Code
      </h1>
      <div>
        <img
          src={"/qr-code.png"}
          className="w-full max-w-md h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex">
        <Link
          href={"/"}
          className="w-full shadow-2xl transition-all duration-200 text-nowrap p-3 px-5 text-center bg-black border-2 focus:ring-4 focus:ring-blue-500 border-gray-500 rounded-md font-medium text-white hover:bg-gray-900/40"
        >
          Acessar jogo
        </Link>
      </div>
    </div>
  );
}
