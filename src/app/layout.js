import "./globals.css";
import Header from "@/app/components/layout-component/Header";

export const metadata = {
  title: "Bonjour",
  description: "your favourite food feed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
