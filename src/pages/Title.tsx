import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">🏌️ Golf Party</h1>

      <button
        onClick={() => navigate("/game")}
        className="rounded-xl bg-green-600 px-8 py-4 text-xl text-white hover:bg-green-700"
      >
        ゲーム開始
      </button>

      <p className="text-gray-500">Ver 0.0.1</p>
    </div>
  );
}