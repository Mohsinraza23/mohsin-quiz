import Link from "next/link";
import { Button } from "../app/compoments/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Quiz App</h1>
        <p className="mb-8 text-gray-600">BEST OF LUCK</p>
        <div className="space-y-6">
          <Link href="/quiz/basic" className="block">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg">
              Basic Quiz
            </Button>
          </Link>
          <Link href="/quiz/advanced" className="block">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg">
              Advanced Quiz
            </Button>
          </Link>
        </div>
      </div>
      <p className="mt-8 text-white text-lg font-bold">Made by Mohsin Raza</p>
    </div>
  );
}
