"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Layers, ArrowRight, Command } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const integrationTools = ["CRM", "Email", "Calendly", "Sheets", "Slack", "WhatsApp", "Notion", "Make"]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-sm font-medium text-sky-300 uppercase tracking-wider mb-4">Servicios</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-100 mb-4 text-balance">
            Web, mensaje y automatización trabajando juntos.
          </h2>
          <p className="text-zinc-500 max-w-2xl text-pretty">
            No hacemos una web bonita y esperamos suerte. Diseñamos cada tramo del recorrido: primera impresión,
            prueba, objeciones, llamada a la acción y seguimiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/60 bg-zinc-900/50 hover:border-sky-300/40 transition-all duration-300 rounded-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <BarChart3 className="w-5 h-5 text-sky-300 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Arquitectura de conversión</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Estructura, copy y jerarquía visual para que cada visita entienda qué hacer después.
                </p>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-sky-300" />
                        <span className="text-xs text-zinc-500">Leads</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-zinc-500" />
                        <span className="text-xs text-zinc-500">Ventas</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Visitas", value: "3.8K", change: "+18%" },
                      { label: "Leads", value: "127", change: "+31%" },
                      { label: "Cierre", value: "18.6%", change: "+4%" },
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        className="bg-zinc-900/70 rounded-md p-2.5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <p className="text-zinc-500 text-xs mb-1">{metric.label}</p>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-zinc-100 font-semibold text-sm">{metric.value}</span>
                          <motion.span
                            className="text-sky-300 text-xs"
                            animate={{ opacity: [0.55, 1, 0.55] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {metric.change}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 55, 40, 78, 52, 88, 64, 73, 48, 92, 67, 84].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-zinc-700 to-sky-300 rounded-sm origin-bottom"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: h / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.04, ease: "easeOut" }}
                        whileHover={{ scaleY: 1, transition: { duration: 0.2 } }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/60 bg-zinc-900/50 hover:border-sky-300/40 transition-all duration-300 rounded-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center"
                    animate={{ scale: [1, 1.07, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Zap className="w-5 h-5 text-sky-300" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Desarrollo rápido y estable</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Código limpio, responsive y preparado para medir sin cargar la web de scripts innecesarios.
                </p>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-3">
                    <motion.span
                      className="text-4xl font-display font-bold text-zinc-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      2.4s
                    </motion.span>
                    <span className="text-zinc-500 text-sm">objetivo LCP</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-sky-400 to-zinc-300 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/60 bg-zinc-900/50 hover:border-sky-300/40 transition-all duration-300 rounded-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <Command className="w-5 h-5 text-sky-300" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Oferta, copy y CTA</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Aterrizamos tu mensaje en titulares, módulos y llamadas a la acción con intención comercial.
                </p>
                <div className="flex justify-center gap-2 mt-auto">
                  {["Oferta", "Prueba", "CTA"].map((key) => (
                    <div
                      key={key}
                      className="flex items-center justify-center min-w-16 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700/50 px-3"
                    >
                      <span className="text-zinc-300 font-mono text-xs">{key}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/60 bg-zinc-900/50 hover:border-sky-300/40 transition-all duration-300 rounded-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Layers className="w-5 h-5 text-sky-300" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Automatizaciones IA como complemento</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Formularios inteligentes, respuestas iniciales, resúmenes de leads y avisos al equipo comercial.
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-auto">
                  {integrationTools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="aspect-square rounded-lg border border-zinc-800 bg-zinc-800/50 flex items-center justify-center"
                    >
                      <span className="text-[10px] text-zinc-400 text-center px-1">{tool}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.a
                  href="mailto:hola@unostudio.org?subject=Automatizaciones%20IA%20para%20mi%20web"
                  whileHover={{ x: 6 }}
                  className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded-md transition-colors"
                >
                  Ver automatizaciones <ArrowRight className="w-4 h-4" />
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
