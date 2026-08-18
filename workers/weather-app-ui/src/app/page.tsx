// 1. Define your data outside the component
const CITIES = [
  { value: "london", label: "London, UK" },
  { value: "new-york", label: "New York, US" },
  { value: "los-angeles", label: "Los Angeles, US" },
  { value: "berlin", label: "Berlin, Germany" },
  { value: "tokyo", label: "Tokyo, Japan" },
  { value: "dubai", label: "Dubai, UAE" },
];

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="w-full max-w-md">
        <h3 className="text-2xl mb-6 font-normal text-center sm:text-left">
          Check the weather forecast now
        </h3>
        
        {/* Search Input Group */}
        <div className="flex gap-2 mb-8">
          <select 
            className="flex-1 p-3 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
            aria-label="Search" 
            id="location-select"
          >
            {/* 2. Map over the array to generate options dynamically */}
            {CITIES.map((city) => (
              <option 
                key={city.value} 
                className="bg-white dark:bg-zinc-900 text-black dark:text-white" 
                value={city.value}
              >
                {city.label}
              </option>
            ))}
          </select>

          <a 
            href="#" 
            className="flex items-center px-4 py-2 font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            Check!
          </a>
        </div>

        {/* Weather Card ... (rest of your code remains the same) */}
        <div className="border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm bg-gray-50 dark:bg-zinc-900">
          <h4 className="text-xl font-normal mb-3">New York, US</h4>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            Current temperature: <strong className="text-black dark:text-white">5.42°C</strong>
          </p>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            Windspeed: <strong className="text-black dark:text-white">12kph</strong>
          </p>
        </div>
      </div>
    </section>
  );
}