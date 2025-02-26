import { Navbar } from '@/components/Navbar';
import './globals.css';
import { SearchProvider } from '@/context/SearchContext';

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
        <SearchProvider>
          <header>
            <Navbar />
          </header>
          <main className="container mx-auto px-4 mt-4 max-w-6xl flex justify-center">
            <div className="w-full max-w-5xl">{children}</div>
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
