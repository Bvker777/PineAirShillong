import type {Metadata} from 'next';
import { Lora, Montserrat } from 'next/font/google';
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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${lora.variable} ${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-[#f9f9f6] text-[#333333] antialiased selection:bg-pine-accent/30 selection:text-pine-charcoal" suppressHydrationWarning>
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
