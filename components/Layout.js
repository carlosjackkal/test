import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const ClientRouter = dynamic(() => import('./ClientRouter'), { ssr: false })

function NavLink({ href, label }) {
  // href should be an absolute path (for crawlers) like '/about'
  // but clicking will set the hash to enable SPA hash routing.
  function onClick(e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return
    }
    e.preventDefault()
    // set the hash so HashRouter picks it up: use leading slash
    window.location.hash = href
  }

  return (
    <a href={href} onClick={onClick} style={{ marginRight: 12 }}>
      {label}
    </a>
  )
}

export default function Layout({ children }) {
  // If a user lands on a plain hash URL (e.g. /#/about), we want the client
  // router to reflect the hash. The dynamic ClientRouter is only mounted
  // on the client so it won't run during SSR.
  useEffect(() => {
    // no-op; ensures this component rehydrates on client
  }, [])

  return (
    <div>
      <nav style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/contact" label="Contact" />
      </nav>

      <main style={{ padding: '12px' }}>
        {children}
      </main>

      {/* client-side HashRouter (only runs on client) */}
      <ClientRouter />
    </div>
  )
}
