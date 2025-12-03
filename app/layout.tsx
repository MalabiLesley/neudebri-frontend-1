import "./globals.css";

export const metadata = {
  title: "Nuedebri Health App Kenya",
  description: "Patient monitoring platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-screen flex">
          <div className="flex-1 flex flex-col">
            <main className="flex-1 container py-6">
              {children}
            </main>
            <footer className="bg-white border-t">
              <div className="container py-4 text-sm text-slate-600 flex justify-between items-center">
                <div>© {new Date().getFullYear()} Nuedebri Health App Kenya</div>
                <div className="space-x-4">
                  <a href="/privacy" className="hover:underline">Privacy</a>
                  <a href="/terms" className="hover:underline">Terms</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
