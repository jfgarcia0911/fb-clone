import { useState, useEffect } from 'react';

export default function Toast() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const showDiv = () => {
    setIsVisible(true);
    setTimeRemaining(5);
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && isVisible) {
      setIsVisible(false);
    }
  }, [timeRemaining, isVisible]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 md:p-8">
        
        <div className="flex flex-col items-center">
          <button
            onClick={showDiv}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Show Temporary Div
          </button>
          
          {isVisible && (
            <div className="mt-8 w-full">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-blue-800">Temporary Content</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-blue-600">Disappearing in:</span>
                    <span className="px-2 py-1 bg-blue-500 text-white rounded-md text-sm font-bold">
                      {timeRemaining}s
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">
                  This div will automatically disappear after 3 seconds. You can click the button again to show it once more.
                </p>
                <div className="mt-4 h-2 w-full bg-blue-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-1000 ease-linear"
                    style={{ width: `${(timeRemaining/5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How it works:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Clicking the button sets the visibility state to true and a 3-second timer</li>
              <li>A countdown timer shows how many seconds remain</li>
              <li>The progress bar visually indicates the time remaining</li>
              <li>After 3 seconds, the div automatically disappears</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}