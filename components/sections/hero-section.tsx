"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SOCIAL_LINKS } from "@/lib/constants"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: ArrowRight,
  mail: Mail,
}

export function HeroSection() {
  const locale = useLocale()
  const t = useTranslations('home')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={mounted ? { opacity: 0, scale: 0.5 } : false}
            animate={mounted ? { opacity: 1, scale: 1 } : false}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl md:text-5xl font-bold text-primary-foreground">
                JD
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/60 animate-pulse opacity-20"></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              John Doe
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              {t('title')}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="group">
              <Link href={`/${locale}/projects`}>
                {t('viewProjects')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/contact`}>
                {t('contactMe')}
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              {t('downloadCV')}
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-accent"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={mounted ? { opacity: 0, y: 20 } : false}
                  animate={mounted ? { opacity: 1, y: 0 } : false}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={mounted ? { opacity: 0 } : false}
            animate={mounted ? { opacity: 1 } : false}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={mounted ? { y: [0, 10, 0] } : false}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={mounted ? { y: [0, 12, 0] } : false}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
