import type {Metadata} from 'next';
import { Anton, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const anton = Anton({ weight: "400", subsets: ['latin'], variable: '--font-anton' });

export const metadata: Metadata = {
  title: 'CDC - ISOLATION CAMPAIGN',
  description: 'MANDATORY ISOLATION DEMANDED DUE TO MUTATING ANOMALY',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} ${anton.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
