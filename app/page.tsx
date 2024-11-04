import "@/app/lib/styles/space.css";
import { LeadForm } from "./lib/ui/forms/lead";

export default function MemoryGame() {
  return (
    <div className="memory-game-container memory-game-container-animated flex flex-col items-center justify-center min-h-screen p-6 text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 mb-8 drop-shadow-xl">
        Bem vindo ao BWSpace
      </h1>

      <LeadForm />
    </div>
  );
}
