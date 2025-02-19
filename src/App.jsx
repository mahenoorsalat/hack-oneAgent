import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArrowRight, Twitter, Shield, Zap, Wallet, BarChart2 , Github } from 'lucide-react';


function App() {
  const [count, setCount] = useState(0)

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
            </div>
            </div>
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">

      {/* Hero Section */}

      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Automate Your</span>
                  <span className="block text-blue-600">Meme Coin Trading</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Leverage the power of AI and social signals to automatically trade meme coins on NEAR Protocol. Fast, secure, and efficient.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Powerful Features for Smart Trading
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-6 bg-white rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Monitoring</h3>
                  <p className="mt-2 text-gray-500">
                    Instant detection of influencer tweets about potential meme coins on NEAR Protocol.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-6 bg-white rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Instant Execution</h3>
                  <p className="mt-2 text-gray-500">
                    Lightning-fast trading execution on Ref Finance with automated verification.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-6 bg-white rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Risk Management</h3>
                  <p className="mt-2 text-gray-500">
                  Advanced stop-loss and smart risk tools to safeguard your investments.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Start trading in three simple steps
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-blue-600">
                  <Wallet className="h-12 w-12" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">1. Connect Wallet</h3>
                <p className="mt-2 text-gray-500">
                  Securely connect your NEAR wallet to get started
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-blue-600">
                  <Twitter className="h-12 w-12" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">2. Enter Twitter Handle</h3>
                <p className="mt-2 text-gray-500">
                  Add influencer accounts you want to monitor
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-blue-600">
                  <BarChart2 className="h-12 w-12" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">3. Start Trading</h3>
                <p className="mt-2 text-gray-500">
                  Let the bot automatically monitor and trade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Footer */}
       <footer className="mt-auto bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://github.com/nirmitsaini1024/One-Trillion-Agents" className="text-gray-400 hover:text-gray-500">
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
  )
}

export default App
