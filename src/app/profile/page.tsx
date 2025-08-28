import { auth, currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default async function ProfilePage() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <SignedOut>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Profile Access Required
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please sign in to view your profile information.
          </p>
          <SignInButton mode="modal">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Your Profile
          </h1>

          {user && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                {user.imageUrl && (
                  <img
                    src={user.imageUrl}
                    alt="Profile"
                    className="h-16 w-16 rounded-full"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Account Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      User ID
                    </label>
                    <p className="text-sm text-gray-900 dark:text-white font-mono">
                      {userId}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Created
                    </label>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Last Updated
                    </label>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {user.updatedAt
                        ? new Date(user.updatedAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email Verified
                    </label>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {user.primaryEmailAddress?.verification?.status ===
                      "verified"
                        ? "Yes"
                        : "No"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </SignedIn>
    </div>
  );
}
