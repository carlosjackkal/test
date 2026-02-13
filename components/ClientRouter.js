import Link from 'next/link';

export default function ClientRouter() {
  return (
    <div>
      <Link href="/problem">
        <a>Problem</a>
      </Link>
      <Link href="/architecture">
        <a>Architecture</a>
      </Link>
      <Link href="/orange-paper">
        <a>Orange Paper</a>
      </Link>
      <Link href="/governance">
        <a>Governance</a>
      </Link>
    </div>
  );
}