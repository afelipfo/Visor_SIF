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
        description: "Tablero interactivo de segmentos viales de Medellín",
        url: "https://m-medellin.maps.arcgis.com/apps/dashboards/5e9aefa0e1694c7d8b81f995a2c8250c",
        image: "/images/segmentos_viales.jpg",
        keywords: ["segmentos", "vías", "malla vial", "infraestructura"],
      },
      {
        title: "Baches",
        description: "Tablero de monitoreo y gestión de baches en la ciudad",
        url: "https://www.arcgis.com/apps/dashboards/c150ccbfcaf5460cba33c727525ccbe2",
        image: "/images/baches.jpg",
        keywords: ["baches", "mantenimiento vial", "calzada", "reparaciones"],
      },
      {
        title: "Avances y proyección de la gestión de urgencias en Medellín",
        description: "Mapa narrativo sobre la gestión de urgencias",
        url: "https://storymaps.arcgis.com/stories/f91fffe9dda3449994e93f2fb77c02af",
        image: "/images/urgencias.JPG",
        keywords: ["urgencias", "emergencias", "respuesta", "mapa narrativo"],
      },
      {
        title: "Tacita de Plata: Mobiliario que transforma Medellín",
        description: "Mapa narrativo sobre el mobiliario urbano de Medellín",
        url: "https://storymaps.arcgis.com/stories/d45bbe427f9a4e469c7f8001f0bf89cd",
        image: "/images/tacita.JPG",
        keywords: ["mobiliario urbano", "espacio público", "ciudad", "mapa narrativo"],
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
            description: "Tablero de seguimiento a la ejecución presupuestal",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNDAyOGE4OTMtZTExMi00M2VlLWJiNmUtMTMwMzk3MjY0YmU3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/medellin-stadium.jpg",
            keywords: ["presupuesto", "finanzas", "ejecución", "recursos"],
          },
          {
            title: "Informes Indicadores PI",
            description: "Indicadores de gestión y desempeño del Plan Indicativo",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjliYjNkNGQtYjJiMC00MDRhLWJlZDMtYjk4YmI1YjMwZjUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/medellin-cityscape.jpg",
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
            description: "Tablero de seguimiento al programa de parques",
            url: "https://app.powerbi.com/view?r=eyJrIjoiN2Y1ZTQyNGQtOTkzZC00MjY4LTg5NzktZWY1NzNiYjE2NzBkIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/parques.jpg",
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
            image: "/images/candelaria.jpg",
            keywords: ["precontractual", "licitación", "propuestas", "evaluación"],
          },
          {
            title: "Seguimiento Contractual",
            description: "Monitoreo y control de contratos en ejecución",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZjIxMGEzMGYtNjIwZi00OTY5LWExYWItNjUxMjk2NDEwOTUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/candelaria2.jpg",
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
            image: "/images/populares.jpg",
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
            image: "/images/proyectose.jpg",
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
            image: "/images/contratosobra.JPG",
            keywords: ["contratos de obra", "infraestructura", "avance", "construcción"],
          },
          {
            title: "Empleabilidad",
            description: "Tablero de seguimiento a programas de empleabilidad",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjUyOWI4ZmQtZWIzNi00NjM2LTlkOGUtOGM0OTUwNjY1MmNmIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/empleabilidad.jpg",
            keywords: ["empleabilidad", "talento humano", "empleo", "programas"],
          },
          {
            title: "Informe Malla Vial",
            description: "Reporte del estado de la malla vial de la ciudad",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNWI3ZTNkZmMtMjEyNy00NjU1LTk3YzktNTMyOGJkMzZlN2ZiIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/mallavial.jpg",
            keywords: ["malla vial", "vías", "pavimento", "estado"],
          },
          {
            title: "Informe Paraderos",
            description: "Tablero de seguimiento a paraderos de transporte público",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZDQ2OGM4MDItYTc1Zi00MjE5LWJlNmUtZjJhMDE3ZjkzMWFjIiwidCI6ImJhMzM0NGUyLTAxMGYtNGJkZi1iNTEyLWMzOGRmYTdhNWJhNSIsImMiOjR9",
            image: "/images/paraderos.jpg",
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
            image: "/images/pqrs.jpeg",
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
            description: "Tablero de gestión y seguimiento de zonas verdes",
            url: "https://app.powerbi.com/view?r=eyJrIjoiODc0MjQyNmMtZjY5Zi00YWQ2LWExM2UtZDkwYWMxM2ZkNTkzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/socioambiental.jpg",
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
            description: "Tablero de gestión de trabajadores oficiales",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNWM1NzY3MjQtZmViMy00YmRiLWJiODgtMDg0MDRhZjVkMTgzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/trabajadores.jpg",
            keywords: ["trabajadores", "personal oficial", "gestión humana", "operaciones"],
          },
          {
            title: "Parque Automotor",
            description: "Seguimiento y gestión del parque automotor",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNmQ1ZThhNWItZTA1Mi00ZDc4LTgwMTktYWEyYzViOTY1YTNhIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/parqueautomotor.jpg",
            keywords: ["vehículos", "flota", "movilidad interna", "logística"],
          },
          {
            title: "Intervenciones Directas",
            description: "Tablero de seguimiento a intervenciones directas",
            url: "https://app.powerbi.com/view?r=eyJrIjoiYjE2NjE2MjItNTUxNi00ZTI4LThmNzAtNjY0NThjNGYxN2Q2IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/intervencionesdirectas.jpg",
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
            description: "Tablero de gestión de corregimientos",
            url: "https://app.powerbi.com/view?r=eyJrIjoiZmVhNjY3YTYtNTIwNi00NzUzLTkyYWYtZmZiMDBiNTdkNWQwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/corregimientos.jpg",
            keywords: ["corregimientos", "rural", "gestión territorial", "desarrollo"],
          },
          {
            title: "Informe Calamidad Pública",
            description: "Reporte de atención a situaciones de calamidad pública",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjEyMzdhNGEtZGVjNC00YTM4LWEzNDAtMjI1MmY1NzdlODEwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/calamidadpublicas.jpeg",
            keywords: ["calamidad", "emergencias", "atención", "respuesta"],
          },
          {
            title: "Plan de Contratación",
            description: "Tablero del plan anual de contratación",
            url: "https://app.powerbi.com/view?r=eyJrIjoiMjgzYmIxZTctMmM1Yi00YWEzLWIyYTktYjk3ODYxNGI3NTY4IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/contratacions.jpg",
            keywords: ["plan de contratación", "programación", "contratos", "planeación"],
          },
          {
            title: "Atenciones DAGRD-SIF Emergencias",
            description: "Tablero de atención a emergencias coordinadas con DAGRD",
            url: "https://app.powerbi.com/view?r=eyJrIjoiNjEyM2VkYWItNjk1Ny00NDY0LTg3ZjktYzE4N2Y2MjAzMTE3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9",
            image: "/images/dagrd.jpeg",
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
        image: "/images/sifgpt.jpg",
        keywords: ["ia", "asistente virtual", "chatbot", "preguntas"],
      },
      {
        title: "Informe de Gestión",
        description: "Informe interactivo de gestión de la Secretaría de Infraestructura Física - Equipo de Comunicaciones",
        url: "/comunicaciones.html",
        image: "/images/comunicaciones.jpg",
        keywords: ["informe", "gestión", "comunicaciones", "reporte", "interactivo"],
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
