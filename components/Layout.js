import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const ClientRouter = dynamic(() => import('./ClientRouter'), { ssr: false })

function NavLink({ path, label }) {
  // Use hash-based URLs so HashRouter handles the navigation
  // path should be like '/', '/about', '/contact'
  const hashUrl = `#${path}`
  
  return (
    <a href={hashUrl} style={{ marginRight: 12 }}>
      {label}
    </a>
  )
}

export default function Layout({ children }) {
  // If a user lands on a hash URL, the HashRouter will handle routing
  useEffect(() => {
    // no-op; ensures this component rehydrates on client
  }, [])

  return (
    <div>
      <nav style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
        <NavLink path="/" label="Home" />
        <NavLink path="/about" label="About" />
        <NavLink path="/contact" label="Contact" />
      </nav>

      <main style={{ padding: '12px' }}>
        {children}
      </main>

      {/* client-side HashRouter (only runs on client) */}
      <ClientRouter />
    </div>
  )
}
