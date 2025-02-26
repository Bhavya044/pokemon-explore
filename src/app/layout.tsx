// src/app/layout.tsx
import { Navbar } from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Pokémon Explorer',
  description: 'Explore the world of Pokémon with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-pokemon-pattern min-h-screen`}>
        <header>
          <Navbar />
        </header>
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
