"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SOCIAL_LINKS } from "@/lib/constants"
import Image from "next/image"

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-secondary/10 overflow-hidden">
      {/* خلفية متدرجة متحركة بسيطة */}
      <div className="absolute inset-0 bg-[radial-gradient(#8883_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* صورة البروفايل مع تأثير بصري أجمل */}
          <motion.div
            initial={mounted ? { opacity: 0, scale: 0.5 } : false}
            animate={mounted ? { opacity: 1, scale: 1 } : false}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
             <Image  src ="/apple-touch-icon.png" alt="Profile Picture" width={200} height={200} className="rounded-full" />
 
            </div>
          </motion.div>

          {/* الاسم واللقب */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Mohammed Alslamat
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground italic">
              {t('title')}
            </h2>
          </motion.div>

          {/* الوصف */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* الأزرار */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
{/* زر "مشاريعي" – أساسي، Gradient, Glow, Hover Lift */}
<Button
  asChild
  size="lg"
  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-br from-primary to-primary/80 shadow-glow hover-lift transition-all duration-300"
>
  <Link href={`/${locale}/projects`}>
    {t('viewProjects')}
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
</Button>

{/* زر "تواصل معي" – Ghost / Outline style */}
<Button
  asChild
  size="lg"
  variant="ghost"
  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-lift"
>
  <Link href={`/${locale}/contact`}>
    {t('contactMe')}
  </Link>
</Button>

{/* زر "تحميل السيرة الذاتية" – شفّاف بتأثير زجاجي */}
<Button
  size="lg"
  variant="ghost"
  className="group glass text-white hover:bg-white/10 px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all duration-300 hover-lift"
>
  <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
  {t('downloadCV')}
</Button>

          </motion.div>

          {/* روابط السوشال ميديا */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.6, delay: 0.8 }}
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
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* مؤشر النزول */}
          <motion.div
            initial={mounted ? { opacity: 0 } : false}
            animate={mounted ? { opacity: 1 } : false}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
