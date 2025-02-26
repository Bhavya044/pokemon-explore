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
          <main className="container mx-auto px-4  max-w-5xl  mt-4 items-center flex justify-center">
            {children}
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
