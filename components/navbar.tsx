"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getAllDashboards, sections } from "@/lib/dashboards"
import type { DashboardEntry } from "@/lib/dashboards"

const dashboards = getAllDashboards()
const sectionOrder = new Map(sections.map((section, index) => [section.id, index]))

type SearchGroup = {
  sectionId: string
  sectionTitle: string
  items: DashboardEntry[]
}

export function Navbar() {
  const [query, setQuery] = useState("")

  const groupedResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) {
      return []
    }

    const tokens = trimmed.split(/\s+/).filter(Boolean)

    const matches = dashboards
      .map((dashboard) => {
        const haystack = [
          dashboard.title,
          dashboard.description,
          dashboard.sectionTitle,
          dashboard.subsectionTitle ?? "",
          dashboard.keywords.join(" "),
        ]
          .join(" ")
          .toLowerCase()

        const tokenMatches = tokens.every((token) => haystack.includes(token))

        if (!tokenMatches) {
          return null
        }

        const score =
          tokens.reduce((acc, token) => {
            const tokenScore =
              (dashboard.title.toLowerCase().includes(token) ? 3 : 0) +
              ((dashboard.subsectionTitle ?? "").toLowerCase().includes(token) ? 2 : 0) +
              (dashboard.sectionTitle.toLowerCase().includes(token) ? 2 : 0) +
              (dashboard.keywords.join(" ").toLowerCase().includes(token) ? 1 : 0)
            return acc + tokenScore
          }, 0) + (dashboard.subsectionTitle ? 1 : 0)

        return { dashboard, score }
      })
      .filter((item): item is { dashboard: typeof dashboards[number]; score: number } => Boolean(item))
      .sort((a, b) => {
        const sectionDiff =
          (sectionOrder.get(a.dashboard.sectionId) ?? 0) - (sectionOrder.get(b.dashboard.sectionId) ?? 0)
        if (sectionDiff !== 0) return sectionDiff
        if (b.score !== a.score) return b.score - a.score
        return a.dashboard.title.localeCompare(b.dashboard.title)
      })
      .map((item) => item.dashboard)

    const groups = new Map<string, SearchGroup>()

    matches.forEach((dashboard) => {
      const group = groups.get(dashboard.sectionId)
      if (group) {
        group.items = [...group.items, dashboard]
      } else {
        groups.set(dashboard.sectionId, {
          sectionId: dashboard.sectionId,
          sectionTitle: dashboard.sectionTitle,
          items: [dashboard],
        })
      }
    })

    return Array.from(groups.values()).sort(
      (a, b) => (sectionOrder.get(a.sectionId) ?? 0) - (sectionOrder.get(b.sectionId) ?? 0),
    )
  }, [query])

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="relative mx-auto w-full md:max-w-2xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Busca tableros por nombre, unidad, palabra clave o área"
            className="pl-9 pr-10"
            type="search"
            aria-label="Buscar tableros"
          />
          {query && (
            <button
              type="button"
              className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground"
              onClick={() => setQuery("")}
              aria-label="Limpiar búsqueda"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {query && (
            <div className="absolute left-0 right-0 top-full mt-2 max-h-[28rem] overflow-y-auto rounded-md border bg-background shadow-xl">
              {groupedResults.length > 0 ? (
                <div className="space-y-4 py-3">
                  {groupedResults.map((group) => (
                    <div key={group.sectionId}>
                      <div className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {group.sectionTitle}
                      </div>
                      <ul className="grid gap-2 px-2 sm:grid-cols-2">
                        {group.items.map((dashboard) => (
                          <li key={dashboard.id}>
                            <a
                              href={dashboard.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-md border px-4 py-3 text-left transition hover:border-primary hover:bg-accent/10"
                            >
                              <p className="text-sm font-semibold text-foreground">{dashboard.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {dashboard.subsectionTitle ? `${dashboard.subsectionTitle} · ` : ""}
                                {dashboard.sectionTitle}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground/80 line-clamp-2">{dashboard.description}</p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-6 text-sm text-muted-foreground">No se encontraron tableros.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
