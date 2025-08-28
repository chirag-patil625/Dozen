import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
            card: "shadow-xl",
            headerTitle: "text-2xl font-bold text-gray-900 dark:text-white",
            headerSubtitle: "text-gray-600 dark:text-gray-400",
            formFieldLabel: "text-gray-700 dark:text-gray-300",
            formFieldInput:
              "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
            footerActionLink:
              "text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300",
            dividerLine: "border-gray-300 dark:border-gray-600",
            dividerText: "text-gray-500 dark:text-gray-400",
            socialButtonsBlockButton:
              "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600",
            socialButtonsBlockButtonText: "font-medium",
          },
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "blockButton",
          },
        }}
        routing="hash"
        redirectUrl="/home"
      />
    </div>
  );
}
