import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Moohammad Moradi - Full Stack Developer",
  description: "Mohammad Moradi is a full-stack developer specializing in React, Next.js, Node.js, and Express, with experience in MongoDB, PostgreSQL, and Docker. He builds scalable web applications, focusing on clean code, performance, and seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("flex antialiased h-screen overflow-hidden bg-gray-100", inter.className)}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-auto">
            <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
              {children}
              {/* <Footer /> */}
            </div>
          </div>
          <Toaster />
      </ThemeProvider>
      </body>
    </html>
  );
}
