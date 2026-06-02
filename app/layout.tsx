import type {Metadata} from 'next';
import { Lora, Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'PineAir B&B | Shillong',
  description: 'A serene B&B in Shillong blending misty atmosphere with Japanese minimalist design.',
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-R1GL5GEQD9';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${lora.variable} ${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-[#f9f9f6] text-[#333333] antialiased selection:bg-pine-accent/30 selection:text-pine-charcoal" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

