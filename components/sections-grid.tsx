"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Database, ExternalLink } from "lucide-react"
import { sections } from "@/lib/dashboards"
import type { ContentBlock, Section as SectionType, Subsection } from "@/lib/dashboards"

export function SectionsGrid() {
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(sections[0]?.id ?? null)

  const selectedSection = useMemo(
    () => sections.find((section) => section.id === expandedSectionId) ?? null,
    [expandedSectionId],
  )

  const handleToggle = (sectionId: string) => {
    setExpandedSectionId((prev) => (prev === sectionId ? null : sectionId))
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-balance text-4xl font-bold md:text-5xl">Secciones</h2>
        <p className="text-pretty mx-auto mt-3 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Explora las soluciones analíticas disponibles por área y accede a cada tablero con una distribución más clara.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => {
          const isActive = section.id === expandedSectionId

          return (
            <motion.button
              key={section.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => handleToggle(section.id)}
              aria-pressed={isActive}
              className={`group flex h-full flex-col rounded-2xl border bg-card p-6 text-left shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive ? "ring-2 ring-primary" : "hover:border-primary/60 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight text-foreground md:text-xl">{section.title}</h3>
                </div>
                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  className="rounded-full bg-muted p-2 text-muted-foreground transition group-hover:text-primary"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{section.description}</p>
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedSection && (
          <motion.div
            key={selectedSection.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
            className="mt-12"
          >
            <SectionDetails section={selectedSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function SectionDetails({ section }: { section: SectionType }) {
  if (section.comingSoon) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border bg-card/80 px-8 py-16 text-center shadow-lg backdrop-blur">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Database className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">Próximamente</h3>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Estamos preparando nuevos tableros para esta sección. Vuelve pronto para descubrir las novedades.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border bg-background/95 shadow-xl backdrop-blur">
      <div className="border-b px-6 py-6 md:px-10 md:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Área seleccionada
            </span>
            <h3 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{section.title}</h3>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground md:text-base">{section.description}</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 md:px-10 md:py-10">
        {section.subsections && section.subsections.length > 0 ? (
          <SubsectionsGrid subsections={section.subsections} />
        ) : (
          <DashboardGrid items={section.content} />
        )}
      </div>
    </div>
  )
}

function SubsectionsGrid({ subsections }: { subsections: Subsection[] }) {
  return (
    <div className="grid gap-8">
      {subsections.map((subsection, index) => (
        <div
          key={`${subsection.title}-${index}`}
          className="rounded-2xl border border-dashed border-primary/20 bg-muted/30 p-6 shadow-sm md:p-8"
        >
          <h4 className="pb-6 text-2xl font-semibold text-foreground">{subsection.title}</h4>

          <DashboardGrid items={subsection.items} dense />
        </div>
      ))}
    </div>
  )
}

function DashboardGrid({ items, dense = false }: { items: ContentBlock[]; dense?: boolean }) {
  if (!items.length) {
    return (
      <div className="flex items-center justify-center rounded-2xl border bg-card px-6 py-16 text-center text-sm text-muted-foreground">
        No hay tableros disponibles en este momento.
      </div>
    )
  }

  const gridClasses = dense
    ? "grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    : "grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"

  return (
    <div className={gridClasses}>
      {items.map((item, index) => (
        <DashboardCard key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  )
}

function DashboardCard({ item }: { item: ContentBlock }) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:border-primary hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      whileHover={{ y: -6 }}
    >
      {item.image && (
        <div className="relative h-40 w-full overflow-hidden bg-muted">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(event) => {
              const target = event.target as HTMLImageElement
              target.src = "/placeholder.svg?height=200&width=400"
            }}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 px-5 py-5">
        <h5 className="text-base font-semibold text-foreground md:text-lg">{item.title}</h5>
        <p className="line-clamp-3 text-sm text-muted-foreground">{item.description}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary">
          Abrir tablero
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  )
}
