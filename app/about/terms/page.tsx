export default function TermsPage() {
  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="text-gray-700 mb-4">
        By using the Nuedebri Health App, you agree to follow our terms and
        conditions. Please read them carefully.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Use the system responsibly and ethically.</li>
        <li>Do not attempt to misuse or exploit system vulnerabilities.</li>
        <li>All medical data must be handled with confidentiality.</li>
      </ul>
    </div>
  );
}
