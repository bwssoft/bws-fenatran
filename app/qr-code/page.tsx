import "@/app/lib/styles/space.css";

export default function QRCode() {
  return (
    <div className="memory-game-container memory-game-container-animated flex flex-col items-center justify-center min-h-screen p-6 text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 mb-8 drop-shadow-xl py-2">
        Acesse nosso jogo pelo QR Code
      </h1>
      <div>
        <img
          src={"/qr-code.png"}
          className="w-full max-w-md h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
