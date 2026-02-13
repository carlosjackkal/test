import { HashRouter, Routes, Route } from 'react-router-dom'
import ProblemContent from './ProblemContent'
import GovernanceContent from './GovernanceContent'


export default function ClientRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProblemContent />} />
        <Route path="/about" element={<GovernanceContent />} />
        <Route path="/contact" element={<ArchivedContent />} />
      </Routes>
    </HashRouter>
  )
}
