import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <div className="relative w-64 h-auto">
            <Image
              src="/images/alcaldia-logo-new.png"
              alt="Alcaldía de Medellín - Distrito de Ciencia, Tecnología e Innovación"
              width={400}
              height={300}
              className="w-full h-auto"
              priority={false}
            />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-600 text-sm font-medium">© Octubre 2025 - Secretaría de Infraestructura Física</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
