import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const ClientRouter = dynamic(() => import('./ClientRouter'), { ssr: false })

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
    // <div>
    //   <nav style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
    //     <NavLink path="/" label="Home" />
    //     <NavLink path="/about" label="About" />
    //     <NavLink path="/contact" label="Contact" />
    //   </nav>

    //   <main style={{ padding: '12px' }}>
    //     {/* Client: render SPA with ClientRouter (hash-based navigation) */}
    //     {/* Server: render children for SSR/SEO */}
    //     {typeof window !== 'undefined' ? <ClientRouter /> : children}
    //   </main>
    // </div>
    <div>
    <nav class="nav">
        <div class="nav-container">
            <div class="nav-logo">
               
                <NavLink path="/" label="BTCDecoded" />
            </div>
            <div class="nav-links">
                
                <NavLink path="problem" label="Problem"/>
                <NavLink path="architecture" label="Architecture"/>
                <NavLink path="orange-paper" label="Orange Paper"/>
                <NavLink path="governance" label="Governance"/>
                
                <a href="https://thebitcoincommons.org" target="_blank" rel="noopener" id="commonsNavlink">Framework</a>
            </div>
        </div>
    </nav>
      <main style={{ padding: '12px' }}>
        {/* Client: render SPA with ClientRouter (hash-based navigation) */}
        {/* Server: render children for SSR/SEO */}
        {typeof window !== 'undefined' ? <ClientRouter /> : children}
      </main>
      </div>
  )
}
