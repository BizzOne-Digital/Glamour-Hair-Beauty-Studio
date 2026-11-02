import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl">This page has stepped out.</h1>
      <p className="mt-4 text-white/70">The page you are looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-gold mt-10">Back to Home</Link>
    </section>
  );
}
