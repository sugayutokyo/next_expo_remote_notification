export default function Home() {
  const sendPush = () => {
    fetch('/api/sendPushApi');
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => sendPush()}>
        テストプッシュ通知
      </button>
    </div>
  );
}