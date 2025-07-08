import { useState } from 'react';
import ChampionCard from '../components/ChampionCard';

export default function Home() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`/api/getUser?username=${username}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Anoma Champions</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Kaito username"
        className="text-black px-4 py-2 rounded"
      />
      <button onClick={fetchData} className="bg-purple-600 px-6 py-2 mt-4 rounded">
        Generate Card
      </button>

      {data && <ChampionCard data={data} />}
    </div>
  );
}