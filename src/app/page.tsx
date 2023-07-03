import Link from 'next/link';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="hover:text-blue-700 hover:underline" href="/list/1">
        Go to pokemon list!
      </Link>
    </main>
  );
}
