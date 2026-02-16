import Link from 'next/link';
import { Workflow } from '../pages/_app';

export default function NavBarNodes({ selectedWorkflow, setSelectedWorkflow, Workflow }) {
    
    return(
        <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <div><Link href="/" style={{ marginRight: 12 }}>
              BTCDecoded
            </Link></div>
            <div className="workflow-toggle">
              <button 
                className={selectedWorkflow === 'Devs' ? 'active' : ''} 
                onClick={() => setSelectedWorkflow(Workflow.Developers)} 
                style={{ marginLeft: 12 }}
              >
                Devs
              </button>
              <button 
                className={selectedWorkflow === 'Nodes' ? 'active' : ''} 
                onClick={() => setSelectedWorkflow(Workflow.Nodes)} 
                style={{ marginLeft: 8 }}
              >
                Nodes
              </button>
            </div>
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
    )
}