import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (




    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Head>
        <title>Mooo Stache</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="px-8 py-4 flex items-center justify-between bg-blue-500">
        <div className="text-4xl font-light mx-auto">Mooo Stache</div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center py-8 bg-white">
        <ul className="flex space-x-6 font-light">
          <li><a href="#" className="text-xl text-blue-500 hover:text-blue-400">Stache</a></li>
          <li><a href="#" className="text-xl text-blue-500 hover:text-blue-400">Token</a></li>
          <li><a href="#" className="text-xl text-blue-500 hover:text-blue-400">FAQ</a></li>
          <li><a href="#" className="text-xl text-blue-500 hover:text-blue-400">About Us</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <section className="flex-grow flex items-center justify-center">

        <div className="flex flex-col text-center justify-center">
          <h2 className="text-4xl font-light mb-4">Welcome to Mooo Stache!</h2>
          <p className="text-lg font-light">Show your Stache - Coming Q3 2024.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-white text-center">
        <ul className="flex justify-center space-x-6 font-light">
          <li><a href="#" className="text-lg text-blue-500 hover:text-blue-400">Twitter</a></li>
          <li><a href="#" className="text-lg text-blue-500 hover:text-blue-400">Discord</a></li>
          <li><a href="#" className="text-lg text-blue-500 hover:text-blue-400">Telegram</a></li>

        </ul>
      </footer>
    </div>
  );
}
