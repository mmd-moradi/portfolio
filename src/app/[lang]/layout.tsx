import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/footer";
import { cookies } from "next/headers";
import { i18n, Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { SidebarType } from "@/types/sidebar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Moohammad Moradi - Full Stack Developer",
  description: "Passionate about building impactful software, Mohammad Moradi is a full-stack developer dedicated to creating scalable, user-focused applications that help businesses achieve their goals and enhance digital experiences.",
  keywords: ["Full-Stack Web Developer", "Software Developer Portfolio", "React and Next.js Developer", "Scalable Web Applications", "Professional Web Development"]
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale }
}>) {

  const cookieStore = cookies()
  const geoData = cookieStore.get("geo-data");
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={cn("flex antialiased h-screen overflow-hidden bg-gray-100 dark:bg-zinc-900", inter.className)}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <div className="flex-1 flex">
            <Sidebar locale={params.lang} sidebarData={dictionary.sidebar as SidebarType} geoData={geoData} />
            <div className="lg:pl-2 lg:pt-2 bg-secondary dark:bg-zinc-900 flex-1 overflow-auto">
              <div className="flex-1 bg-background min-h-screen lg:rounded-tl-xl border-2 border-transparent lg:border-neutral-200 overflow-y-auto dark:lg:border-neutral-700">
                {children}
                <Footer locale={params.lang} />
              </div>
            </div>
          </div>
          <Toaster />
      </ThemeProvider>
      </body>
    </html>
  );
}
