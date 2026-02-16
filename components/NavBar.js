import Link from 'next/link';

export default function NavBar({ selectedWorkflow, setSelectedWorkflow, navLinks }) {

    return(
        <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/" style={{ marginRight: 12 }}>
              BTCDecoded
            </Link>
            <div className="workflow-toggle">
              <button 
                className={selectedWorkflow === 'Devs' ? 'active' : ''} 
                onClick={() => setSelectedWorkflow('Devs')} 
                style={{ marginLeft: 12 }}
              >
                Devs
              </button>
              <button 
                className={selectedWorkflow === 'Nodes' ? 'active' : ''} 
                onClick={() => setSelectedWorkflow('Nodes')} 
                style={{ marginLeft: 8 }}
              >
                Nodes
              </button>
            </div>
          </div>
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} style={{ marginRight: 12 }}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
}


