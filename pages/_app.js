import React, { useState } from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import '../components/styles.css';
import Splash from '../components/Splash';

const DevNavLinks = [
  { href: '/problem', title: 'Problem' },
  { href: '/architecture', title: 'Architecture' },
  { href: '/orangepaper', title: 'Orange Paper' },
  { href: '/governance', title: 'Governance' },
  // { href: 'https://thebitcoincommons.org', title: 'Framework', external: true },
];

const NodeNavLinks = [
  { href: '/whyblvm', title: 'Why BLVM?' },
  { href: '/plugandplay', title: 'Pre-Built Nodes' },
  { href: '/desktop', title: 'PC  / Mac' },
  { href: '/faq', title: 'FAQ' },
  
];

export const Workflow = {
    Nodes: 'Nodes',
    Developers: 'Developers',
    Splash: 'Splash'
}

export default function MyApp({ Component, pageProps }) {
  const [selectedWorkflow, setSelectedWorkflow] = useState(Workflow.Developers);

  
  let navLinks;
  switch (selectedWorkflow) {
    case Workflow.Developers:
      navLinks = DevNavLinks;
      break;
    case Workflow.Nodes:
      navLinks = NodeNavLinks;
      break;
    default:
      navLinks = [];
  }

  return (
    <Layout>
      <NavBar 
        selectedWorkflow={selectedWorkflow} 
        setSelectedWorkflow={setSelectedWorkflow} 
        navLinks={navLinks} 
      />
      {selectedWorkflow === Workflow.Splash && <Splash setSelectedWorkflow={setSelectedWorkflow} Workflow={Workflow} />}
      
      {selectedWorkflow !== Workflow.Splash && <Component {...pageProps} />}
      
    </Layout>
  );
}
