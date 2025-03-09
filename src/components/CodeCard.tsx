const CodeCard = () => {
    return (
      <div className="flex justify-center mt-12">
        <div className="relative p-6 bg-gray-300/40 dark:bg-gray-700/40 rounded-2xl shadow-2xl">
          <div className="w-80 md:w-96 p-4 bg-gray-900 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <pre className="text-gray-300 text-sm">
              <code>
                <span className="text-gray-400">package</span> main{"\n"}
                {"\n"}
                <span className="text-gray-400">import</span> "fmt"{"\n"}
                {"\n"}
                <span className="text-gray-400">func</span> main() {"{"}{"\n"}
                {"  "}fmt.Println(
                <span className="text-green-400">"Hello, friend"</span>){"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  };
  
  export default CodeCard;
  