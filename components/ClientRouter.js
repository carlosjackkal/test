import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomeContent from './HomeContent'
import AboutContent from './AboutContent'
import ContactContent from './ContactContent'

export default function ClientRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/contact" element={<ContactContent />} />
      </Routes>
    </HashRouter>
  )
}
