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
        onClick={() => navigate("/lobby")}
        className="rounded-xl bg-green-600 px-8 py-4 text-xl text-white hover:bg-green-700"
      >
        ゲーム開始
      </button>

      <p className="text-gray-500">Ver 0.0.2</p>
    </div>
  );
}