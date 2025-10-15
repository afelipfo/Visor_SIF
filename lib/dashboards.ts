export type ContentBlock = {
  title: string
  description: string
  url: string
  image?: string
  keywords?: string[]
}

export type Subsection = {
  title: string
  items: ContentBlock[]
  keywords?: string[]
}

export type Section = {
  id: string
  title: string
  description: string
  color: string
  content: ContentBlock[]
  subsections?: Subsection[]
  comingSoon?: boolean
  keywords?: string[]
}

export const sections: Section[] = [
  {
    id: "geographic",
    title: "Analítica Geográfica",
    description: "Visualización y análisis de datos geoespaciales",
    color: "primary",
    keywords: ["mapas", "geografía", "geoespacial", "gis", "territorio"],
    content: [
      {
        title: "Segmentos Viales",
        description: "Dashboard interactivo de segmentos viales de Medellín",
        url: "https://m-medellin.maps.arcgis.com/apps/dashboards/5e9aefa0e1694c7d8b81f995a2c8250c",
        image: "/dashboard-map-interface.jpg",
        keywords: ["segmentos", "vías", "malla vial", "infraestructura"],
      },
      {
        title: "Baches",
        description: "Monitoreo y gestión de baches en la ciudad",
        url: "https://www.arcgis.com/apps/dashboards/c150ccbfcaf5460cba33c727525ccbe2",
        image: "/road-network-infrastructure-dashboard.jpg",
        keywords: ["baches", "mantenimiento vial", "calzada", "reparaciones"],
      },
      {
        title: "Avances y proyección de la gestión de urgencias en Medellín",
        description: "Story map sobre la gestión de urgencias",
        url: "https://storymaps.arcgis.com/stories/f91fffe9dda3449994e93f2fb77c02af",
        image: "/emergency-response-coordination-dashboard.jpg",
        keywords: ["urgencias", "emergencias", "respuesta", "storymap"],
      },
      {
        title: "Tacita de Plata: Mobiliario que transforma Medellín",
        description: "Story map sobre el mobiliario urbano de Medellín",
        url: "https://storymaps.arcgis.com/stories/d45bbe427f9a4e469c7f8001f0bf89cd",
        image: "/general-dashboard-interface.png",
        keywords: ["mobiliario urbano", "espacio público", "ciudad", "equipamiento"],
      },
    ],
  },
  {
    id: "data",
    title: "Analítica de Datos",
    description: "Análisis avanzado de datos y métricas",
    color: "secondary",
    keywords: ["datos", "indicadores", "estadísticas", "power bi", "reportes"],
    content: [],
    subsections: [
      {
        title: "Unidad de Gestión de la Información y Proyectos",
        keywords: ["gestión de información", "proyectos", "planeación", "presupuesto"],
        items: [
          {
            title: "Ejecución Presupuestal",
            description: "Dashboard de seguimiento a la ejecución presupuestal",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNDAyOGE4OTMtZTExMi00M2VlLWJiNmUtMTMwMzk3MjY0YmU3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/budget-execution-dashboard-charts-graphs.jpg",
            keywords: ["presupuesto", "finanzas", "ejecución", "recursos"],
          },
          {
            title: "Informes Indicadores PI",
            description: "Indicadores de gestión y desempeño del Plan Indicativo",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjliYjNkNGQtYjJiMC00MDRhLWJlZDMtYjk4YmI1YjMwZjUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/performance-indicators-dashboard-metrics.jpg",
            keywords: ["indicadores", "plan indicativo", "seguimiento", "desempeño"],
          },
        ],
      },
      {
        title: "Unidad de Estudios y Diseños",
        keywords: ["diseños", "estudios técnicos", "infraestructura", "urbanismo"],
        items: [
          {
            title: "Parques - Tejiendo Hogares",
            description: "Dashboard de seguimiento al programa de parques",
            url: "https://app.powerbi.com/view?r=eyJrIjoiN2Y1ZTQyNGQtOTkzZC00MjY4LTg5NzktZWY1NzNiYjE2NzBkIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/parks-green-spaces-urban-development-dashboard.jpg",
            keywords: ["parques", "espacio público", "diseño urbano", "paisajismo"],
          },
        ],
      },
      {
        title: "Unidad de Gestión Contractual",
        keywords: ["contratación", "procesos", "contratos", "licitaciones"],
        items: [
          {
            title: "Proceso Precontractual",
            description: "Seguimiento a procesos de contratación en etapa precontractual",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMzE1MWNmMjQtYWEyMy00MGVjLWI4MjgtNzIzZTYxZDAzNDVhIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/contract-procurement-process-dashboard.jpg",
            keywords: ["precontractual", "licitación", "propuestas", "evaluación"],
          },
          {
            title: "Seguimiento Contractual",
            description: "Monitoreo y control de contratos en ejecución",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZjIxMGEzMGYtNjIwZi00OTY5LWExYWItNjUxMjk2NDEwOTUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/contract-monitoring-tracking-dashboard.jpg",
            keywords: ["contratos", "seguimiento", "ejecución", "control"],
          },
        ],
      },
      {
        title: "Unidad de Apoyo Jurídico",
        keywords: ["jurídico", "legal", "acciones populares", "normatividad"],
        items: [
          {
            title: "Acciones Populares",
            description: "Seguimiento a acciones populares y procesos jurídicos",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZWY3ZDM3ODctMGFmYS00OTlmLWJlYTgtMmViNTE5NmZmYjA5IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/legal-actions-lawsuits-dashboard.jpg",
            keywords: ["acciones populares", "procesos legales", "demandas", "jurídico"],
          },
        ],
      },
      {
        title: "Unidad de Dirección Técnica",
        keywords: ["proyectos estratégicos", "dirección técnica", "planificación"],
        items: [
          {
            title: "Estado Proyectos Estratégicos",
            description: "Seguimiento al estado de proyectos estratégicos de la secretaría",
            url: "https://app.powerbi.com/view?r=eyJrIjoiYzEzZGI3ZTUtNDc1ZS00ODdjLTg1YTctYTA1OGZjYzdmMTVlIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/strategic-projects-status-dashboard.jpg",
            keywords: ["proyectos", "estratégicos", "avance", "gestión"],
          },
        ],
      },
      {
        title: "Unidad de Ejecución de Proyectos",
        keywords: ["ejecución", "obra pública", "contratos de obra", "gestión de proyectos"],
        items: [
          {
            title: "Seguimiento a Contratos de Obra",
            description: "Monitoreo de contratos de obra en ejecución",
            url: "https://app.powerbi.com/view?r=eyJrIjoiOTJiOGNkZTUtY2E5ZS00NDRkLWIyZmEtYzBjZjA5MGQ1NjA0IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/construction-contracts-monitoring-dashboard.jpg",
            keywords: ["contratos de obra", "infraestructura", "avance", "construcción"],
          },
          {
            title: "Empleabilidad",
            description: "Dashboard de seguimiento a programas de empleabilidad",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjUyOWI4ZmQtZWIzNi00NjM2LTlkOGUtOGM0OTUwNjY1MmNmIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/employment-jobs-workforce-dashboard.jpg",
            keywords: ["empleabilidad", "talento humano", "empleo", "programas"],
          },
          {
            title: "Informe Malla Vial",
            description: "Reporte del estado de la malla vial de la ciudad",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNWI3ZTNkZmMtMjEyNy00NjU1LTk3YzktNTMyOGJkMzZlN2ZiIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/road-network-infrastructure-dashboard.jpg",
            keywords: ["malla vial", "vías", "pavimento", "estado"],
          },
          {
            title: "Informe Paraderos",
            description: "Dashboard de seguimiento a paraderos de transporte público",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZDQ2OGM4MDItYTc1Zi00MjE5LWJlNmUtZjJhMDE3ZjkzMWFjIiwidCI6ImJhMzM0NGUyLTAxMGYtNGJkZi1iNTEyLWMzOGRmYTdhNWJhNSIsImMiOjR9",
            image: "/bus-stops-public-transport-dashboard.jpg",
            keywords: ["paraderos", "transporte", "movilidad", "infraestructura"],
          },
        ],
      },
      {
        title: "Unidad Administrativa",
        keywords: ["administración", "servicio al ciudadano", "gestión interna"],
        items: [
          {
            title: "PQRS",
            description: "Seguimiento a Peticiones, Quejas, Reclamos y Sugerencias",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMTIxNTFlNTQtYzg5OS00M2Y0LTgyOTUtYmZkZDU2NDU4ZTAwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/customer-service-complaints-requests-dashboard.jpg",
            keywords: ["pqrs", "peticiones", "servicio al ciudadano", "trámites"],
          },
        ],
      },
      {
        title: "Unidad Socioambiental y Paisajismo",
        keywords: ["socioambiental", "paisajismo", "medio ambiente", "zonas verdes"],
        items: [
          {
            title: "Zonas Verdes",
            description: "Dashboard de gestión y seguimiento de zonas verdes",
            url: "https://app.powerbi.com/view?r=eyJrIjoiODc0MjQyNmMtZjY5Zi00YWQ2LWExM2UtZDkwYWMxM2ZkNTkzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/green-areas-parks-landscaping-dashboard.jpg",
            keywords: ["zonas verdes", "ambiental", "jardinería", "espacio público"],
          },
        ],
      },
      {
        title: "Unidad de Mantenimiento",
        keywords: ["mantenimiento", "operaciones", "logística", "equipos"],
        items: [
          {
            title: "Trabajadores Oficiales",
            description: "Dashboard de gestión de trabajadores oficiales",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNWM1NzY3MjQtZmViMy00YmRiLWJiODgtMDg0MDRhZjVkMTgzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/workers-employees-workforce-management-dashboard.jpg",
            keywords: ["trabajadores", "personal oficial", "gestión humana", "operaciones"],
          },
          {
            title: "Parque Automotor",
            description: "Seguimiento y gestión del parque automotor",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNmQ1ZThhNWItZTA1Mi00ZDc4LTgwMTktYWEyYzViOTY1YTNhIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/vehicle-fleet-management-dashboard.jpg",
            keywords: ["vehículos", "flota", "movilidad interna", "logística"],
          },
          {
            title: "Intervenciones Directas",
            description: "Dashboard de seguimiento a intervenciones directas",
            url: "https://app.powerbi.com/view?r=eyJrIjoiYjE2NjE2MjItNTUxNi00ZTI4LThmNzAtNjY0NThjNGYxN2Q2IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/direct-interventions-maintenance-dashboard.jpg",
            keywords: ["intervenciones", "obras menores", "mantenimiento", "operativo"],
          },
        ],
      },
      {
        title: "Despacho SIF",
        keywords: ["despacho", "estrategia", "planificación", "emergencias"],
        items: [
          {
            title: "Gerencia de Corregimientos",
            description: "Dashboard de gestión de corregimientos",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZmVhNjY3YTYtNTIwNi00NzUzLTkyYWYtZmZiMDBiNTdkNWQwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/rural-districts-management-dashboard.jpg",
            keywords: ["corregimientos", "rural", "gestión territorial", "desarrollo"],
          },
          {
            title: "Informe Calamidad Pública",
            description: "Reporte de atención a situaciones de calamidad pública",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjEyMzdhNGEtZGVjNC00YTM4LWEzNDAtMjI1MmY1NzdlODEwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/public-emergency-disaster-response-dashboard.jpg",
            keywords: ["calamidad", "emergencias", "atención", "respuesta"],
          },
          {
            title: "Plan de Contratación",
            description: "Dashboard del plan anual de contratación",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjgzYmIxZTctMmM1Yi00YWEzLWIyYTktYjk3ODYxNGI3NTY4IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/annual-procurement-plan-dashboard.jpg",
            keywords: ["plan de contratación", "programación", "contratos", "planeación"],
          },
          {
            title: "Atenciones DAGRD-SIF Emergencias",
            description: "Dashboard de atención a emergencias coordinadas con DAGRD",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjEyM2VkYWItNjk1Ny00NDY0LTg3ZjktYzE4N2Y2MjAzMTE3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/emergency-response-coordination-dashboard.jpg",
            keywords: ["dagrd", "emergencias", "coordinación", "respuesta rápida"],
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
    keywords: ["inteligencia artificial", "ia", "asistentes", "automatización"],
    content: [
      {
        title: "SIF GPT",
        description: "Asistente de IA para consultas sobre el Sistema de Información",
        url: "https://sifgpt.vercel.app/",
        image: "/ai-chatbot-assistant-interface.jpg",
        keywords: ["ia", "asistente virtual", "chatbot", "preguntas"],
      },
    ],
  },
]

export type DashboardEntry = {
  id: string
  title: string
  description: string
  url: string
  sectionId: string
  sectionTitle: string
  subsectionTitle?: string
  keywords: string[]
}

export function getAllDashboards(): DashboardEntry[] {
  return sections.flatMap((section) => {
    const topLevel = section.content.map((item, index) => ({
      id: `${section.id}-${index}`,
      title: item.title,
      description: item.description,
      url: item.url,
      sectionId: section.id,
      sectionTitle: section.title,
      keywords: [
        ...(section.keywords ?? []),
        ...(item.keywords ?? []),
      ],
    }))

    const nested = section.subsections
      ? section.subsections.flatMap((subsection, subIndex) =>
          subsection.items.map((item, itemIndex) => ({
            id: `${section.id}-${subIndex}-${itemIndex}`,
            title: item.title,
            description: item.description,
            url: item.url,
            sectionId: section.id,
            sectionTitle: section.title,
            subsectionTitle: subsection.title,
            keywords: [
              ...(section.keywords ?? []),
              ...(subsection.keywords ?? []),
              ...(item.keywords ?? []),
            ],
          })),
        )
      : []

    return [...topLevel, ...nested]
  })
}
