"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

import { SOCIAL_LINKS } from "@/lib/constants"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

export function Footer() {
  const locale = useLocale()
  const tFooter = useTranslations('footer')
  const tNav = useTranslations('navigation')

  return (
    <footer id="footer" className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {tFooter('builtWith')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
              <Link
                href={`/${locale}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {tNav('home')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {tNav('about')}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {tNav('projects')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {tNav('contact')}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            {tFooter('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
