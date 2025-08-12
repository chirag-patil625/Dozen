export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Shared layout UI, e.g., a header */}
      <header className="p-4 bg-gray-100">
        <h1 className="text-lg font-bold">Home Layout</h1>
      </header>

      {/* Render the page content */}
      <main>{children}</main>
    </div>
  )
}
