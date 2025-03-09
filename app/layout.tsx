import "./globals.css";

import Footer from "./(components)/Footer";
import {config} from "../data/data";

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="zh-Hant-TW">
        <head>
            <title>{config.title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </head>
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
