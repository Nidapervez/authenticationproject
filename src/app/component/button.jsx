"use client";

import Image from "next/image";
import { useAuth } from "../../../lib/contexts/AuthContext";

export default function LoginButton() {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } = useAuth();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      {user ? (
        // Logout Button
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-4 h-16 w-64 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out"
        >
          {/* Logout Icon */}
         
          <span className="text-lg font-semibold">Logout</span>
        </button>
      ) : (
        // Google Sign-In Button
        <button
          onClick={handleSignInWithGoogle}
          className="flex items-center justify-center gap-4 h-16 w-64 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition duration-300 ease-in-out"
          disabled={isLoading}
        >
          {/* Google Logo */}
          <Image className="h-7 w-7" src="/1.png" alt="Google Logo" width={28} height={28} />
          <span className="text-lg font-semibold">{isLoading ? "Signing in..." : "Login with Google"}</span>
        </button>
      )}

      {error && (
        <p className="text-red-500 mt-4 text-center text-sm">{error}</p>
      )}
    </div>
  );
}
