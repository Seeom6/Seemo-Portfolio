import { NextSeo, NextSeoProps } from 'next-seo'
import { useLocale } from 'next-intl'
import { SITE_CONFIG } from '@/lib/constants'

interface SEOHeadProps extends Partial<NextSeoProps> {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function SEOHead({
  title,
  description,
  image,
  url,
  type = 'website',
  ...props
}: SEOHeadProps) {
  const locale = useLocale()
  
  const seoTitle = title 
    ? `${title} | ${SITE_CONFIG.title}`
    : SITE_CONFIG.title

  const seoDescription = description || SITE_CONFIG.description
  const seoImage = image || `${SITE_CONFIG.url}/og-image.jpg`
  const seoUrl = url || SITE_CONFIG.url

  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      canonical={seoUrl}
      languageAlternates={[
        {
          hrefLang: 'en',
          href: `${SITE_CONFIG.url}/en`,
        },
        {
          hrefLang: 'ar',
          href: `${SITE_CONFIG.url}/ar`,
        },
        {
          hrefLang: 'x-default',
          href: `${SITE_CONFIG.url}/en`,
        },
      ]}
      openGraph={{
        type,
        locale,
        url: seoUrl,
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: seoImage,
            width: 1200,
            height: 630,
            alt: seoTitle,
          },
        ],
        siteName: SITE_CONFIG.name,
      }}
      twitter={{
        handle: SITE_CONFIG.author.twitter,
        site: SITE_CONFIG.author.twitter,
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'author',
          content: SITE_CONFIG.author.name,
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'googlebot',
          content: 'index, follow',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
        {
          name: 'msapplication-TileColor',
          content: '#000000',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ]}
      {...props}
    />
  )
}
