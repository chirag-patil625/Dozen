"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function HomePage() {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/user");
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      setApiResponse({ error: "Failed to fetch API" });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <SignedOut>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Dozen
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            The all-in-one project management tool that combines the best of
            Jira, Notion, Trello, and Asana.
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Please sign in to access your projects and start collaborating.
          </p>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome back to Dozen! 🎉
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You're now signed in and ready to manage your projects. Here's
              what you can do:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  📋 Create Projects
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Start new projects and organize your tasks efficiently.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  👥 Collaborate
                </h3>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Invite team members and work together seamlessly.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  📊 Track Progress
                </h3>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Monitor project progress with detailed analytics.
                </p>
              </div>
            </div>
          </div>

          {/* API Test Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              API Test
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Test Clerk's authentication with our protected API endpoint.
            </p>
            <button
              onClick={testAPI}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {loading ? "Testing..." : "Test Protected API"}
            </button>

            {apiResponse && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  API Response:
                </h3>
                <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Create New Project
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View All Projects
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Team Settings
              </button>
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
