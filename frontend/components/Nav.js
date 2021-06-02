import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/account">account</Link>
      <Link href="/orders">orders</Link>
      <Link href="/products">products</Link>
      <Link href="/sell">sell</Link>
    </nav>
  );
}
