// 2️⃣ Home Page (Index.js)
// src/pages/index.js
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <h1 className="text-5xl font-bold">Hello, I'm Anas!</h1>
        <p className="text-lg mt-4">Software Developer | Problem Solver</p>
      </section>
    </div>
  );
}
