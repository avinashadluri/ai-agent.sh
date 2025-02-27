"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bot, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Bot className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">AiAgent</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#agents" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Agents
          </Link>
          <Link href="#workflow" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Workflow
          </Link>
          <Link href="#future" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Future
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Use Cases
          </Link>
          <Link href="#examples" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Examples
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/docs" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Docs
          </Link>
          <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
            Get Started
          </Button>
        </div>

        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col gap-4 p-6">
            <Link
              href="#agents"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Agents
            </Link>
            <Link
              href="#workflow"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Workflow
            </Link>
            <Link
              href="#future"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Future
            </Link>
            <Link
              href="#use-cases"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              href="#examples"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Examples
            </Link>
            <Link
              href="/docs"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Button className="mt-4 w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

