import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'ProfitMeals — High Protein. Full Flavor. Better You.',
  description:
    'Freshly prepared meals designed for your fitness goals, busy lifestyle, and everyday health.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
