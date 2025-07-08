export default function ChampionCard({ data }) {
  const labels = {
    "7d": "7 Gün",
    "30d": "30 Gün",
    "90d": "3 Ay",
    "180d": "6 Ay",
    "365d": "12 Ay"
  };

  return (
    <div className="mt-8 bg-gradient-to-br from-gray-800 to-purple-900 p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4 text-center">🏆 {data.username}</h2>
      {Object.keys(labels).map((key) => (
        <div key={key} className="flex justify-between py-1 border-b border-white/20">
          <span>{labels[key]}</span>
          <span>
            {data[key].rank ? `#${data[key].rank} - ${data[key].title}` : "Participant"}
          </span>
        </div>
      ))}
      <div className="mt-4 text-sm italic text-center">Powered by Kaito × Anoma</div>
    </div>
  );
}