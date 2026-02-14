import Link from 'next/link';

export default function ClientRouter() {
  return (
    <div>
      <Link href="/problem">
        <a style={{ marginRight: 12 }}>Problem</a>
      </Link>
      <Link href="/architecture">
        <a style={{ marginRight: 12 }}>Architecture</a>
      </Link>
      <Link href="/orange-paper">
        <a style={{ marginRight: 12 }}>Orange Paper</a>
      </Link>
      <Link href="/governance">
        <a style={{ marginRight: 12 }}>Governance</a>
      </Link>
    </div>
  );
}