'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          FreeTTS
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="hover:underline">
            Features
          </Link>
          <Link href="#demo" className="hover:underline">
            Try It
          </Link>
          <Link href="#testimonials" className="hover:underline">
            Testimonials
          </Link>
          <Button variant="outline">Sign Up</Button>
          <ModeToggle />
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden p-4 space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="#features" className="block hover:underline">
            Features
          </Link>
          <Link href="#demo" className="block hover:underline">
            Try It
          </Link>
          <Link href="#testimonials" className="block hover:underline">
            Testimonials
          </Link>
          <Button variant="outline" className="w-full">
            Sign Up
          </Button>
          <div className="pt-2">
            <ModeToggle />
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

