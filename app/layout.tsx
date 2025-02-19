import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { UserProvider } from "@/lib/auth";
import { auth } from "@/lib/auth/base";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
/* import Header from "@/components/ui/Header"; */
import Footer from "@/components/ui/Footer"; // Import the Footer component

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const user = auth().then((session) => session?.user);

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50 dark:bg-gray-950">
        <NextIntlClientProvider messages={messages}>
          <UserProvider userPromise={user}>
            <ThemeProvider>
      
              {children}
              <Footer /> {/* Include the Footer component here */}
            </ThemeProvider>
          </UserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
