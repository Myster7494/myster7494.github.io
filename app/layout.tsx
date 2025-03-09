import "./globals.css";

import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="zh-Hant-TW">
        <body>
        <div
            className="min-h-screen bg-gradient-to-t from-zinc-800 to-zinc-900 p-2 md:flex items-center justify-center">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
