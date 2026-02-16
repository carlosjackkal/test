import Link from 'next/link';
import { Workflow } from '../pages/_app';

export default function NavBar({ selectedWorkflow, setSelectedWorkflow, navLinks }) {

    return(
        <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/" style={{ marginRight: 12 }}>
              BTCDecoded
            </Link>
            
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


