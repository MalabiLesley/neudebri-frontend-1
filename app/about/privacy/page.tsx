export default function PrivacyPage() {
  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        Your privacy is important to us. This policy explains how we collect,
        store, and use your information within the Nuedebri Health Platform.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>We collect only the data necessary for healthcare services.</li>
        <li>Your data is encrypted and securely stored.</li>
        <li>We do not share your data with third parties without consent.</li>
      </ul>
    </div>
  );
}
