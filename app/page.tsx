import { Hero } from "@/components/hero"
import { SectionsGrid } from "@/components/sections-grid"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SectionsGrid />
      <Chatbot />
      <Footer />
    </main>
  )
}
