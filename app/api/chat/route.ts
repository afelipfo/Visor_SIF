import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    console.log("[v0] API: Request received")
    const { message } = await request.json()
    console.log("[v0] API: Message parsed:", message)

    if (!message) {
      return NextResponse.json({ message: "Por favor envía un mensaje." })
    }

    const apiKey = process.env.OPENAI_API_KEY
    console.log("[v0] API: API key exists:", !!apiKey)

    if (!apiKey) {
      console.log("[v0] API: No API key found")
      return NextResponse.json({
        message: "Por favor configura tu API key de OpenAI en el archivo .env. Necesitas crear una variable OPENAI_API_KEY con tu clave de OpenAI.",
      })
    }

    const systemPrompt = `Eres un asistente experto del VisorSIF (Sistema de Información de la Secretaría de Infraestructura Física de Medellín). Tu objetivo es ayudar a los usuarios a encontrar recursos específicos de manera clara y directa.

RECURSOS DISPONIBLES:

ANALÍTICA GEOGRÁFICA:
- Segmentos Viales: Dashboard interactivo de segmentos viales de Medellín - https://storymaps.arcgis.com/stories/f91fffe9dda3449994e93f2fb77c02af
- Baches: Monitoreo y gestión de baches en la ciudad - https://storymaps.arcgis.com/stories/f91fffe9dda3449994e93f2fb77c02af
- Mobiliario Urbano: Gestión de mobiliario urbano en Medellín - https://storymaps.arcgis.com/stories/f91fffe9dda3449994e93f2fb77c02af
- Gestión de Urgencias: Story map sobre gestión de emergencias - https://storymaps.arcgis.com/stories/f91fffe9dda3449994e93f2fb77c02af

ANALÍTICA DE DATOS (Power BI Dashboards por Unidad):

Unidad de Gestión de la Información y Proyectos:
- Ejecución Presupuestal: https://app.powerbi.com/view?r=eyJrIjoiNDAyOGE4OTMtZTExMi00M2VlLWJiNmUtMTMwMzk3MjY0YmU3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Informes Indicadores PI: https://app.powerbi.com/view?r=eyJrIjoiMjliYjNkNGQtYjJiMC00MDRhLWJlZDMtYjk4YmI1YjMwZjUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Unidad de Estudios y Diseños:
- Parques - Tejiendo Hogares: https://app.powerbi.com/view?r=eyJrIjoiN2Y1ZTQyNGQtOTkzZC00MjY4LTg5NzktZWY1NzNiYjE2NzBkIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Unidad de Gestión Contractual:
- Proceso Precontractual: https://app.powerbi.com/view?r=eyJrIjoiMzE1MWNmMjQtYWEyMy00MGVjLWI4MjgtNzIzZTYxZDAzNDVhIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Seguimiento Contractual: https://app.powerbi.com/view?r=eyJrIjoiZjIxMGEzMGYtNjIwZi00OTY5LWExYWItNjUxMjk2NDEwOTUzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Unidad de Apoyo Jurídico:
- Acciones Populares: https://app.powerbi.com/view?r=eyJrIjoiZWY3ZDM3ODctMGFmYS00OTlmLWJlYTgtMmViNTE5NmZmYjA5IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Unidad de Dirección Técnica:
- Estado Proyectos Estratégicos: https://app.powerbi.com/view?r=eyJrIjoiYzEzZGI3ZTUtNDc1ZS00ODdjLTg1YTctYTA1OGZjYzdmMTVlIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Unidad de Ejecución de Proyectos:
- Seguimiento a Contratos de Obra: https://app.powerbi.com/view?r=eyJrIjoiOTJiOGNkZTUtY2E5ZS00NDBkLWIyZmEtYzBjZjA5MGQ1NjA0IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Empleabilidad: https://app.powerbi.com/view?r=eyJrIjoiNjUyOWI4ZmQtZWIzNi00NjM2LTlkOGUtOGM0OTUwNjY1MmNmIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Informe Malla Vial: https://app.powerbi.com/view?r=eyJrIjoiNWI3ZTNkZmMtMjEyNy00NjU1LTk3YzktNTMyOGJkMzZlN2ZiIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Informe Paraderos: https://app.powerbi.com/view?r=eyJrIjoiZDQ2OGM4MDItYTc1Zi00MjE5LWJlNmUtZjJhMDE3ZjkzMWFjIiwidCI6ImJhMzM0NGUyLTAxMGYtNGJkZi1iNTEyLWMzOGRmYTdhNWJhNSIsImMiOjR9

Unidad Administrativa:
- PQRS: https://app.powerbi.com/view?r=eyJrIjoiMTIxNTFlNTQtYzg5OS00M2Y0LTgyOTUtYmZkZDU2NDU4ZTAwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Unidad Socioambiental y Paisajismo:
- Zonas Verdes: https://app.powerbi.com/view?r=eyJrIjoiODc0MjQyNmMtZjY5Zi00YWQ2LWExM2UtZDkwYWMxM2ZkNTkzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Unidad de Mantenimiento:
- Trabajadores Oficiales: https://app.powerbi.com/view?r=eyJrIjoiNWM1NzY3MjQtZmViMy00YmRiLWJiODgtMDg0MDRhZjVkMTgzIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Parque Automotor: https://app.powerbi.com/view?r=eyJrIjoiNmQ1ZThhNWItZTA1Mi00ZDc4LTgwMTktYWEyYzViOTY1YTNhIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Intervenciones Directas: https://app.powerbi.com/view?r=eyJrIjoiYjE2NjE2MjItNTUxNi00ZTI4LThmNzAtNjY0NThjNGYxN2Q2IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

Despacho SIF:
- Gerencia de Corregimientos: https://app.powerbi.com/view?r=eyJrIjoiZmVhNjY3YTYtNTIwNi00NzUzLTkyYWYtZmZiMDBiNTdkNWQwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Informe Calamidad Pública: https://app.powerbi.com/view?r=eyJrIjoiMjEyMzdhNGEtZGVjNC00YTM4LWEzNDAtMjI1MmY1NzdlODEwIiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Plan de Contratación: https://app.powerbi.com/view?r=eyJrIjoiMjgzYmIxZTctMmM1Yi00YWEzLWIyYTktYjk3ODYxNGI3NTY4IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9
- Atenciones DAGRD-SIF Emergencias: https://app.powerbi.com/view?r=eyJrIjoiNjEyM2VkYWItNjk1Ny00NDY0LTg3ZjktYzE4N2Y2MjAzMTE3IiwidCI6IjljNDhlMDg4LTVlNDQtNGIwZC05M2EwLWVlYjJjNjEyN2MzZCIsImMiOjR9

INTELIGENCIA ARTIFICIAL:
- SIF GPT: Asistente de IA para consultas sobre el Sistema de Información - https://sifgpt.vercel.app/

INSTRUCCIONES:
1. Identifica qué tipo de información busca el usuario (geográfica, datos, IA)
2. Sé MUY conciso y directo - NO uses introducciones largas ni explicaciones
3. Para recursos únicos: Solo responde con "[Click aquí](URL)"
4. Para múltiples recursos de una unidad: Lista cada uno en línea separada con "- [Click aquí - Nombre del recurso](URL)"
5. NUNCA uses frases como "Puedes acceder a", "Para esto", "Aquí tienes", etc.
6. SIEMPRE usa "Click aquí" como texto del enlace - sin excepciones
7. Si no hay recursos exactos, sugiere la unidad más cercana y lista sus recursos`

    console.log("[v0] API: Calling OpenAI API directly")

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    })

    console.log("[v0] API: OpenAI response status:", response.status)

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] API: OpenAI error:", errorData)
      return NextResponse.json({
        message: "Lo siento, hubo un problema al conectar con OpenAI. Por favor verifica que tu API key esté configurada correctamente en el archivo .env.",
      })
    }

    const data = await response.json()
    console.log("[v0] API: OpenAI response received")

    const assistantMessage = data.choices[0]?.message?.content || "Lo siento, no pude generar una respuesta."

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("[v0] API: Unexpected error:", error)
    return NextResponse.json({
      message: "Lo siento, ocurrió un error inesperado. Por favor intenta de nuevo.",
    })
  }
}
