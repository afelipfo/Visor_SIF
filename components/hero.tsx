"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const backgroundImages = [
  "/images/medellin-cityscape.jpg",
  "/images/medellin-stadium.jpg",
  "/images/medellin-plaza.jpg",
  "/images/medellin-fisheye.jpeg",
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {backgroundImages.map(
            (image, index) =>
              index === currentImageIndex && (
                <motion.div
                  key={image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt="Panorama de Medellín"
                      fill
                      className="object-cover"
                      priority={index === 0}
                      quality={90}
                    />
                  </motion.div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/60" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo de Alcaldía de Medellín */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              <Image
                src="/alcaldia-medellin-logo.png"
                alt="Alcaldía de Medellín"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              SIF 360
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/95 mb-8 text-pretty font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Centro de Información de la Secretaría de Infraestructura Física
          </p>
        </motion.div>
      </div>
    </section>
  )
}
