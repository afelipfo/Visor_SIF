"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp, Database } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Section = {
  id: string
  title: string
  description: string
  color: string
  content: ContentBlock[]
  subsections?: Subsection[]
  comingSoon?: boolean
}

type Subsection = {
  title: string
  items: ContentBlock[]
}

type ContentBlock = {
  title: string
  description: string
  url: string
  image?: string
}

const sections: Section[] = [
  {
    id: "geographic",
    title: "Analítica Geográfica",
    description: "Visualización y análisis de datos geoespaciales",
    color: "primary",
    content: [
      {
        title: "Segmentos Viales",
        description: "Dashboard interactivo de segmentos viales de Medellín",
        url: "https://m-medellin.maps.arcgis.com/apps/dashboards/5e9aefa0e1694c7d8b81f995a2c8250c",
        image: "/dashboard-map-interface.jpg",
      },
      {
        title: "Baches",
        description: "Monitoreo y gestión de baches en la ciudad",
        url: "https://www.arcgis.com/apps/dashboards/c150ccbfcaf5460cba33c727525ccbe2",
        image: "/road-network-infrastructure-dashboard.jpg",
      },
      {
        title: "Avances y proyección de la gestión de urgencias en Medellín",
        description: "Story map sobre la gestión de urgencias",
        url: "https://storymaps.arcgis.com/stories/f91fffe9dda3449994e93f2fb77c02af",
        image: "/emergency-response-coordination-dashboard.jpg",
      },
      {
        title: "Tacita de Plata: Mobiliario que transforma Medellín",
        description: "Story map sobre el mobiliario urbano de Medellín",
        url: "https://storymaps.arcgis.com/stories/d45bbe427f9a4e469c7f8001f0bf89cd",
        image: "/general-dashboard-interface.png",
      },
    ],
  },
  {
    id: "data",
    title: "Analítica de Datos",
    description: "Análisis avanzado de datos y métricas",
    color: "secondary",
    content: [],
    subsections: [
      {
        title: "Unidad de Gestión de la Información y Proyectos",
        items: [
          {
            title: "Ejecución Presupuestal",
            description: "Dashboard de seguimiento a la ejecución presupuestal",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNDAyOGE4OTMtZTExMi00M2VlLWJiNmUtMTMwMzk3MjY0YmU3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/budget-execution-dashboard-charts-graphs.jpg",
          },
          {
            title: "Informes Indicadores PI",
            description: "Indicadores de gestión y desempeño del Plan Indicativo",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjliYjNkNGQtYjJiMC00MDRhLWJlZDMtYjk4YmI1YjMwZjUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/performance-indicators-dashboard-metrics.jpg",
          },
        ],
      },
      {
        title: "Unidad de Estudios y Diseños",
        items: [
          {
            title: "Parques - Tejiendo Hogares",
            description: "Dashboard de seguimiento al programa de parques",
            url: "https://app.powerbi.com/view?r=eyJrIjoiN2Y1ZTQyNGQtOTkzZC00MjY4LTg5NzktZWY1NzNiYjE2NzBkIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/parks-green-spaces-urban-development-dashboard.jpg",
          },
        ],
      },
      {
        title: "Unidad de Gestión Contractual",
        items: [
          {
            title: "Proceso Precontractual",
            description: "Seguimiento a procesos de contratación en etapa precontractual",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMzE1MWNmMjQtYWEyMy00MGVjLWI4MjgtNzIzZTYxZDAzNDVhIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/contract-procurement-process-dashboard.jpg",
          },
          {
            title: "Seguimiento Contractual",
            description: "Monitoreo y control de contratos en ejecución",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZjIxMGEzMGYtNjIwZi00OTY5LWExYWItNjUxMjk2NDEwOTUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/contract-monitoring-tracking-dashboard.jpg",
          },
        ],
      },
      {
        title: "Unidad de Apoyo Jurídico",
        items: [
          {
            title: "Acciones Populares",
            description: "Seguimiento a acciones populares y procesos jurídicos",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZWY3ZDM3ODctMGFmYS00OTlmLWJlYTgtMmViNTE5NmZmYjA5IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/legal-actions-lawsuits-dashboard.jpg",
          },
        ],
      },
      {
        title: "Unidad de Dirección Técnica",
        items: [
          {
            title: "Estado Proyectos Estratégicos",
            description: "Seguimiento al estado de proyectos estratégicos de la secretaría",
            url: "https://app.powerbi.com/view?r=eyJrIjoiYzEzZGI3ZTUtNDc1ZS00ODdjLTg1YTctYTA1OGZjYzdmMTVlIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/strategic-projects-status-dashboard.jpg",
          },
        ],
      },
      {
        title: "Unidad de Ejecución de Proyectos",
        items: [
          {
            title: "Seguimiento a Contratos de Obra",
            description: "Monitoreo de contratos de obra en ejecución",
            url: "https://app.powerbi.com/view?r=eyJrIjoiOTJiOGNkZTUtY2E5ZS00NDRkLWIyZmEtYzBjZjA5MGQ1NjA0IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/construction-contracts-monitoring-dashboard.jpg",
          },
          {
            title: "Empleabilidad",
            description: "Dashboard de seguimiento a programas de empleabilidad",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjUyOWI4ZmQtZWIzNi00NjM2LTlkOGUtOGM0OTUwNjY1MmNmIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/employment-jobs-workforce-dashboard.jpg",
          },
          {
            title: "Informe Malla Vial",
            description: "Reporte del estado de la malla vial de la ciudad",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNWI3ZTNkZmMtMjEyNy00NjU1LTk3YzktNTMyOGJkMzZlN2ZiIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/road-network-infrastructure-dashboard.jpg",
          },
          {
            title: "Informe Paraderos",
            description: "Dashboard de seguimiento a paraderos de transporte público",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZDQ2OGM4MDItYTc1Zi00MjE5LWJlNmUtZjJhMDE3ZjkzMWFjIiwidCI6ImJhMzM0NGUyLTAxMGYtNGJkZi1iNTEyLWMzOGRmYTdhNWJhNSIsImMiOjR9",
            image: "/bus-stops-public-transport-dashboard.jpg",
          },
        ],
      },
      {
        title: "Unidad Administrativa",
        items: [
          {
            title: "PQRS",
            description: "Seguimiento a Peticiones, Quejas, Reclamos y Sugerencias",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMTIxNTFlNTQtYzg5OS00M2Y0LTgyOTUtYmZkZDU2NDU4ZTAwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/customer-service-complaints-requests-dashboard.jpg",
          },
        ],
      },
      {
        title: "Unidad Socioambiental y Paisajismo",
        items: [
          {
            title: "Zonas Verdes",
            description: "Dashboard de gestión y seguimiento de zonas verdes",
            url: "https://app.powerbi.com/view?r=eyJrIjoiODc0MjQyNmMtZjY5Zi00YWQ2LWExM2UtZDkwYWMxM2ZkNTkzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/green-areas-parks-landscaping-dashboard.jpg",
          },
        ],
      },
      {
        title: "Unidad de Mantenimiento",
        items: [
          {
            title: "Trabajadores Oficiales",
            description: "Dashboard de gestión de trabajadores oficiales",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNWM1NzY3MjQtZmViMy00YmRiLWJiODgtMDg0MDRhZjVkMTgzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/workers-employees-workforce-management-dashboard.jpg",
          },
          {
            title: "Parque Automotor",
            description: "Seguimiento y gestión del parque automotor",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNmQ1ZThhNWItZTA1Mi00ZDc4LTgwMTktYWEyYzViOTY1YTNhIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/vehicle-fleet-management-dashboard.jpg",
          },
          {
            title: "Intervenciones Directas",
            description: "Dashboard de seguimiento a intervenciones directas",
            url: "https://app.powerbi.com/view?r=eyJrIjoiYjE2NjE2MjItNTUxNi00ZTI4LThmNzAtNjY0NThjNGYxN2Q2IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/direct-interventions-maintenance-dashboard.jpg",
          },
        ],
      },
      {
        title: "Despacho SIF",
        items: [
          {
            title: "Gerencia de Corregimientos",
            description: "Dashboard de gestión de corregimientos",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZmVhNjY3YTYtNTIwNi00NzUzLTkyYWYtZmZiMDBiNTdkNWQwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/rural-districts-management-dashboard.jpg",
          },
          {
            title: "Informe Calamidad Pública",
            description: "Reporte de atención a situaciones de calamidad pública",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjEyMzdhNGEtZGVjNC00YTM4LWEzNDAtMjI1MmY1NzdlODEwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/public-emergency-disaster-response-dashboard.jpg",
          },
          {
            title: "Plan de Contratación",
            description: "Dashboard del plan anual de contratación",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjgzYmIxZTctMmM1Yi00YWEzLWIyYTktYjk3ODYxNGI3NTY4IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/annual-procurement-plan-dashboard.jpg",
          },
          {
            title: "Atenciones DAGRD-SIF Emergencias",
            description: "Dashboard de atención a emergencias coordinadas con DAGRD",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjEyM2VkYWItNjk1Ny00NDY0LTg3ZjktYzE4N2Y2MjAzMTE3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/emergency-response-coordination-dashboard.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "Inteligencia Artificial",
    description: "Herramientas de IA para análisis inteligente",
    color: "accent",
    content: [
      {
        title: "SIF GPT",
        description: "Asistente de IA para consultas sobre el Sistema de Información",
        url: "https://sifgpt.vercel.app/",
        image: "/ai-chatbot-assistant-interface.jpg",
      },
    ],
  },
]

export function SectionsGrid() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <section className="py-20 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Secciones</h2>
        <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Accede a herramientas y recursos especializados en cada área
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl ${
                expandedSection === section.id ? "ring-2 ring-" + section.color : ""
              }`}
              onClick={() => toggleSection(section.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </CardTitle>
                <CardDescription className="text-base">{section.description}</CardDescription>
              </CardHeader>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      {section.comingSoon ? (
                        <div className="py-8 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                            <Database className="w-8 h-8 text-muted-foreground" />
                          </div>
                          <p className="text-lg font-semibold mb-2">Próximamente</p>
                          <p className="text-sm text-muted-foreground">Esta sección estará disponible pronto</p>
                        </div>
                      ) : section.subsections ? (
                        <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
                          {section.subsections.map((subsection, subIdx) => (
                            <div key={subIdx} className="space-y-3">
                              <h4 className="font-semibold text-sm text-primary border-b pb-2">{subsection.title}</h4>
                              <div className="space-y-3 pl-2">
                                {subsection.items.map((item, itemIdx) => (
                                  <motion.div
                                    key={itemIdx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (subIdx * subsection.items.length + itemIdx) * 0.05 }}
                                    className="group/item"
                                  >
                                    <a
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {item.image && (
                                        <div className="relative w-full h-32 mb-2 rounded-md overflow-hidden bg-muted">
                                          <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                                            onError={(e) => {
                                              const target = e.target as HTMLImageElement
                                              target.src = "/placeholder.svg?height=200&width=400"
                                            }}
                                          />
                                        </div>
                                      )}
                                      <div className="flex items-start justify-between gap-2">
                                        <div className="flex-1">
                                          <h5 className="font-semibold text-sm mb-1 group-hover/item:text-primary transition-colors">
                                            {item.title}
                                          </h5>
                                          <p className="text-xs text-muted-foreground">{item.description}</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors flex-shrink-0 mt-1" />
                                      </div>
                                    </a>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {section.content.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="group/item"
                            >
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {item.image && (
                                  <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden bg-muted">
                                    <img
                                      src={item.image || "/placeholder.svg"}
                                      alt={item.title}
                                      className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = "/placeholder.svg?height=200&width=400"
                                      }}
                                    />
                                  </div>
                                )}
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1">
                                    <h4 className="font-semibold mb-1 group-hover/item:text-primary transition-colors">
                                      {item.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors flex-shrink-0 mt-1" />
                                </div>
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
