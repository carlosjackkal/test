import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import '../components/styles.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <section>
        
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
      </section>
      <Component {...pageProps} />
    </Layout>
  );
}
