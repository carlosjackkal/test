import Layout from '../components/Layout'
import Link from 'next/link';


export default function IndexPage() {
  return (
    <>
    <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/" style={{ marginRight: 12 }}>
              BTCDecoded
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/problem" style={{ marginRight: 12 }}>
              Problem
            </Link>
            <Link href="/architecture" style={{ marginRight: 12 }}>
              Architecture
            </Link>
            <Link href="/orangepaper" style={{ marginRight: 12 }}>
              Orange Paper
            </Link>
            <Link href="/governance" style={{ marginRight: 12 }}>
              Governance
            </Link>
            <a href="https://thebitcoincommons.org" target="_blank" rel="noopener" id="commonsNavlink">
              Framework
            </a>
          </div>
        </div>
      </nav>
    <Layout>
      <section>
        <h1>Welcome to BTCDecoded</h1>
        <p>Navigate to different sections:</p>
        <ul>
          <li><a href="/problem">Problem</a></li>
          <li><a href="/architecture">Architecture</a></li>
          <li><a href="/orangepaper">Orange Paper</a></li>
          <li><a href="/governance">Governance</a></li>
        </ul>
      </section>
    </Layout>
    </>
  )
}
