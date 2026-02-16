import React, { useState } from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import '../components/styles.css';

const DevNavLinks = [
  { href: '/problem', title: 'Problem' },
  { href: '/architecture', title: 'Architecture' },
  { href: '/orangepaper', title: 'Orange Paper' },
  { href: '/governance', title: 'Governance' },
  { href: 'https://thebitcoincommons.org', title: 'Framework', external: true },
];

const NodeNavLinks = [
  { href: '/problem', title: 'Problem' },
  { href: '/architecture', title: 'Architecture' },
  { href: '/orangepaper', title: 'Orange Paper' },
  { href: '/governance', title: 'Governance' },
  { href: 'https://thebitcoincommons.org', title: 'Framework', external: true },
];

export const Workflow = {
    Nodes: 'Nodes',
    Developers: 'Developers',
}

export default function MyApp({ Component, pageProps }) {
  const [selectedWorkflow, setSelectedWorkflow] = useState(Workflow.Nodes);

  const navLinks = selectedWorkflow === Workflow.Developers ? DevNavLinks : NodeNavLinks;

  return (
    <Layout>
      <NavBar 
        selectedWorkflow={selectedWorkflow} 
        setSelectedWorkflow={setSelectedWorkflow} 
        navLinks={navLinks} 
      />
      <Component {...pageProps} />
    </Layout>
  );
}
