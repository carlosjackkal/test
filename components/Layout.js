import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'



function NavLink({ path, label }) {
  const hashUrl = `#${path}`
  
  return (
    <a href={hashUrl} style={{ marginRight: 12 }}>
      {label}
    </a>
  )
}

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div>
    <nav className="nav">
        <div className="nav-container">
            <div className="nav-logo">
               
                <NavLink path="/" label="BTCDecoded" />
            </div>
            <div className="nav-links">
                
                <NavLink path="/problem" label="Problem"/>
                <NavLink path="/architecture" label="Architecture"/>
                <NavLink path="/orange-paper" label="Orange Paper"/>
                <NavLink path="governance" label="Governance"/>
                
                <a href="https://thebitcoincommons.org" target="_blank" rel="noopener" id="commonsNavlink">Framework</a>
            </div>
        </div>
    </nav>
      <main style={{ padding: '12px' }}>
        {/* Always render children for pre-rendered content */}
        {children}
        {/* Conditionally render ClientRouter for client-side navigation */}
        {typeof window !== 'undefined' && <ClientRouter />}
      </main>
      </div>
  )
}
