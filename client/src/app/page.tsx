import Hero from '@/components/page/hero';
import Services from '@/components/page/services';

export default function Home() {
  return (
    <>
      <main className="w-full max-w-7xl snap-y snap-mandatory self-center px-6">
        <Hero />
        <Services />
      </main>
    </>
  );
}
