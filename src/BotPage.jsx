import { useState } from 'react';
import { ArrowLeft, Twitter, Eye, EyeOff, Play, Square , Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BotPage() {
  const [twitterUsername, setTwitterUsername] = useState('');
  const [nearUsername, setNearUsername] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    // In a real implementation, this would connect to NEAR wallet
    setIsWalletConnected(true);
  };

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-36 w-auto"
              src="/Logo.png"
              alt="Tweet2Trade"
            />
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <span className="block text-blue-600">Tweet2Trade Bot</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto">
              Connect your wallet, set up monitoring parameters, and let the bot trade for you.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              {/* Wallet Connection */}
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Wallet Connection</h2>
                <button
                  onClick={handleConnectWallet}
                  disabled={isWalletConnected}
                  className={`w-full flex justify-center items-center px-4 py-3 border rounded-md shadow-sm text-base font-medium text-white 
                    ${isWalletConnected ? 'bg-green-600 cursor-default' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {isWalletConnected ? 'Wallet Connected' : 'Connect NEAR Wallet'}
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-6">
                  {/* Twitter Username */}
                  <div>
                    <label htmlFor="twitter-username" className="block text-sm font-medium text-gray-700">
                      Twitter Username to Monitor
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Twitter className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="twitter-username"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="@elonmusk"
                        value={twitterUsername}
                        onChange={(e) => setTwitterUsername(e.target.value)}
                        disabled={isMonitoring}
                      />
                    </div>
                  </div>

                  {/* NEAR Testnet Username */}
                  <div>
                    <label htmlFor="near-username" className="block text-sm font-medium text-gray-700">
                      NEAR Testnet Username
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="near-username"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="yourusername.testnet"
                        value={nearUsername}
                        onChange={(e) => setNearUsername(e.target.value)}
                        disabled={isMonitoring}
                      />
                    </div>
                  </div>

                  {/* Private Key */}
                  <div>
                    <label htmlFor="private-key" className="block text-sm font-medium text-gray-700">
                      Private Key
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type={showPrivateKey ? "text" : "password"}
                        id="private-key"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="Enter your private key"
                        value={privateKey}
                        onChange={(e) => setPrivateKey(e.target.value)}
                        disabled={isMonitoring}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowPrivateKey(!showPrivateKey)}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          {showPrivateKey ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Your private key is used locally and never stored on our servers.
                    </p>
                  </div>

                  {/* Monitoring Controls */}
                  <div className="pt-4">
                    <button
                      onClick={toggleMonitoring}
                      disabled={!isWalletConnected || !twitterUsername || !nearUsername || !privateKey}
                      className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white 
                        ${isMonitoring 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'bg-blue-600 hover:bg-blue-700'} 
                        ${(!isWalletConnected || !twitterUsername || !nearUsername || !privateKey) && 'opacity-50 cursor-not-allowed'}`}
                    >
                      {isMonitoring ? (
                        <>
                          <Square className="mr-2 h-5 w-5" />
                          Stop Monitoring
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-5 w-5" />
                          Start Monitoring
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Display */}
              {isMonitoring && (
                <div className="mt-6 bg-blue-50 p-4 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-4 w-4 rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-blue-800">
                        Monitoring tweets from @{twitterUsername}
                      </p>
                      <p className="mt-1 text-sm text-blue-700">
                        Bot is active and waiting for meme coin mentions...
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instructions or details */}
          <div className="mt-12 bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">How the Bot Works</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-medium">1</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      The bot monitors tweets from specified influencer accounts for meme coin mentions
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-medium">2</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      When a potential meme coin is detected, the bot verifies its availability on NEAR
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-medium">3</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      The bot automatically executes trades based on your predefined settings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <p className="text-center text-base text-gray-500">
                  Built with ❤️ for NEAR Hackathon 2025
                </p>
                <p className="text-center text-base text-gray-400">
                  © 2025 Tweet2Trade. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default BotPage;