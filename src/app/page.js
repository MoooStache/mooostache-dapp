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
      <header className="py-4 px-8 flex items-center justify-between bg-blue-500">
        <Image
          src="/MoooStache.jpeg"
          alt="Mooo Stache - Show your Stache"
          className="border border-blue-500"
          width={100}
          height={100}
          priority
        />
        <h1 className="text-3xl font-bold">Mooo Stache</h1>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center py-4 bg-black">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">Stache</a></li>
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">Token</a></li>
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">About Us</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <section className="flex-grow flex items-center justify-center">

        <div className="flex flex-col text-center justify-center">


          <h2 className="text-4xl font-bold mb-4">Welcome to Mooo Stache!</h2>
          <p className="text-gl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center">
        <ul className="flex justify-center space-x-6">
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">Twitter</a></li>
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">Discord</a></li>
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">Telegram</a></li>
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">GitHub</a></li>
          <li><a href="#" className="text-xl font-medium hover:text-blue-400">FAQ</a></li>
        </ul>
      </footer>
    </div>
  );
}
