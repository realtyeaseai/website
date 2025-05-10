export default function MaintenancePage() {
  return (
    <div className="flex h-screen items-center justify-center text-center flex-col px-6 bg-white text-gray-800">
      <div className="text-6xl mb-4">🚧</div>
      <h1 className="text-3xl font-bold text-red-600">We&apos;re Under Maintenance</h1>
      <p className="mt-4 text-lg max-w-md">
        We&apos;re currently making improvements. Please check back in a little while.
      </p>
    </div>
  );
}
