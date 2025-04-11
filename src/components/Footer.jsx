import { FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
       
        <h1 className="text-2xl font-semibold">The Generic</h1>

      
        <div className="flex space-x-6 text-2xl">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-red-500 transition" />
          </a>
          <a href="https://spotify.com" target="_blank" rel="noreferrer">
            <FaSpotify className="hover:text-green-400 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
