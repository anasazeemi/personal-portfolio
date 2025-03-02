// 1️⃣ Navbar Component
// src/components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div>
          <Link href="/#about" className="mx-4">About</Link>
          <Link href="/#projects" className="mx-4">Projects</Link>
          <Link href="/#contact" className="mx-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
}