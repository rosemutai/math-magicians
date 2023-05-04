import { useEffect, useState } from 'react';

const api = 'Cwrs2kSC11L4ddqDBkXv+g==VglM1zL4Lg0sN5RR';
const url = 'https://api.api-ninjas.com/v1/quotes?category=funny';

const Quote = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const data = await fetch(url, {
          headers: {
            'X-Api-Key': api,
          },
        });
        const json = await data.json();
        setData(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuotes();
  }, []);
  return (
    <div className="w-1/2 flex flex-col mx-auto p-4 bg-gray-200/50 shadow-md mt-16">
      {loading && (
        <div
          type="button"
          className="h-5 w-5 px-6 mx-auto bg-orange-400 text-center text-orange-400
            border border-dotted border-white my-5 animate-spin rounded-2xl"
        >
          ..
        </div>
      )}
      {error && <p className="w-1/4 mx-auto my-2 border-red-400 text-center rounded-md">Something went wrong</p>}
      {data.map((element) => (
        <div key={element.quote}>
          <h1 className="text-center">{element.quote}</h1>
          <h4 className="text-center text-orange-400">{element.author}</h4>
        </div>
      ))}
    </div>
  );
};

export default Quote;
