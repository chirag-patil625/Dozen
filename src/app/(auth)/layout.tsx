import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dozen
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Project Management Made Simple
          </p>
        </div>

        {/* Auth Form Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 animate-fade-in-up">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Dozen. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
