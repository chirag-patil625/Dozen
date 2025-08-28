import React from "react";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string | React.ReactNode;
  error?: string;
}

export function Checkbox({
  label,
  error,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const checkboxId =
    id ||
    (typeof label === "string"
      ? label.toLowerCase().replace(/\s+/g, "-")
      : "checkbox");

  return (
    <div className="space-y-1">
      <div className="flex items-start">
        <input
          type="checkbox"
          id={checkboxId}
          className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 ${className}`}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
