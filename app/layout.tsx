import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
    title: "CS392 Icon Finder App",
    description: "Find the icon by its keyword",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body
                className="antialiased min-h-screen bg-gradient-to-b from-blue-50 to-blue-100"
            >
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}