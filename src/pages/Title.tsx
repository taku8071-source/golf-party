import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-green-700 text-white">
      <h1 className="text-6xl font-bold">⛳ Golf Party!!!</h1>

      <p className="mt-3 text-xl opacity-80">
        ～カードで大逆転～
      </p>

      <button
        onClick={() => navigate("/game")}
        className="mt-12 rounded-xl bg-white px-10 py-4 text-2xl font-bold text-green-700 transition hover:scale-105"
      >
        ゲーム開始
      </button>

      <p className="absolute bottom-5 text-sm opacity-70">
        Version 0.0.1
      </p>
    </div>
  );
}