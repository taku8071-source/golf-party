import { useNavigate } from "react-router-dom";

export default function Lobby() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen flex-col items-center bg-green-700 text-white">

      {/* ユーザー情報 */}
      {/* Player Status */}
      <div className="absolute right-8 top-8 flex items-center gap-4 rounded-xl bg-white/20 px-5 py-3 backdrop-blur">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl">
          👤
        </div>

        <div>
          <div className="font-bold text-lg">
            Taku
          </div>

          <div className="text-sm">
            Lv.12　🏆 Gold
          </div>
        </div>
      </div>


      <h1 className="mt-20 text-5xl font-bold">
        ⛳ Golf Party
      </h1>

      <div className="mt-16 flex w-96 flex-col gap-5">

        <button
          onClick={() => navigate("/game")}
          className="rounded-xl bg-white p-5 text-2xl font-bold text-green-700 transition hover:scale-105"
        >
          🏌️ ひとりで遊ぶ
        </button>

        <button
          className="rounded-xl bg-white p-5 text-2xl font-bold text-green-700 transition hover:scale-105"
        >
          🤖 CPUと対戦
        </button>

        <button
          disabled
          className="rounded-xl bg-gray-400 p-5 text-2xl"
        >
          🌐 オンライン対戦
          <div className="text-sm">
            Coming Soon
          </div>
        </button>

        <button
          className="rounded-xl bg-white p-5 text-2xl font-bold text-green-700 transition hover:scale-105"
        >
          📖 ルール
        </button>

      </div>
    </div>
  );
}