import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-center text-gray-700">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-blue-600">
            Nuedebri Health App Kenya
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
          <Link
            href="/privacy"
            className="text-sm text-gray-500 hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:text-blue-600 transition"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
