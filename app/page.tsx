import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { SectionsGrid } from "@/components/sections-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionsGrid />
      <Footer />
    </main>
  )
}
