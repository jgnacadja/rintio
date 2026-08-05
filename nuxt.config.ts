import { defineNuxtConfig } from 'nuxt/config'
import { defineOrganization } from 'nuxt-schema-org/schema'
import { resolve } from 'node:path'
import { legacyRedirects } from './config/redirects'

const enableTrack = !!process.env.ENABLE_TRACK && process.env.ENABLE_TRACK === 'true'
const analyticId = process.env.ANALYTIC_ID
const gtmId = process.env.GTM_ID
const isDev = !!process.env.NODE_ENV && process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  site: {
    url: 'https://rintio.com',
    name: 'Rintio',
    defaultLocale: 'fr',
    description: 'We involve for a better life',
    image: 'https://rintio.com/logo.png'
  },
  app: {
    head: {
      titleTemplate: '%s',
      title: 'Rintio',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content:
            'Rintio est un cabinet d’ingénierie informatique spécialisé dans le développement d’applications et l’intégration de systèmes.'
        },
        {
          name: 'keywords',
          content:
            'rintio, ingénierie informatique, développement d’applications, intégration de systèmes, Bénin, Paris, Abidjan'
        },
        { name: 'author', content: 'Rintio' },
        { name: 'robots', content: 'index, follow' },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'Rintio'
        },
        {
          property: 'og:title',
          content: 'Rintio — Cabinet d’ingénierie informatique'
        },
        {
          property: 'og:description',
          content:
            'Rintio est un cabinet d’ingénierie informatique spécialisé dans le développement d’applications et l’intégration de systèmes.'
        },
        {
          property: 'og:url',
          content: 'https://rintio.com'
        }
      ],
      script: [{ src: '/crisp.js', body: true }],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },
    layoutTransition: { name: 'fade', mode: 'out-in' }
  },
  ssr: true,
  devtools: { enabled: process.env.NUXT_ENV_TEST === 'true' },
  modules: [
    '@vercel/analytics',
    '@nuxtjs/google-fonts',
    '@nuxt/test-utils/module',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/scripts',
    '@nuxtjs/i18n'
  ],
  i18n: {
    compilation: {
      strictMessage: false
    },
    locales: [{ code: 'fr', iso: 'fr-FR', file: 'fr.json' }],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  scripts: {
    registry: {
      ...(enableTrack &&
        analyticId && {
          googleAnalytics: { id: analyticId }
        }),
      ...(enableTrack &&
        gtmId && {
          googleTagManager: {
            id: gtmId,
            pageTracking: true,
            debug: isDev,
            enabled: true
          }
        })
    }
  },
  robots: {
    allow: '/',
    disallow: '/api/',
    sitemap: 'https://rintio.com/sitemap.xml'
  },
  sitemap: {
    defaults: { changefreq: 'monthly', priority: 0.5 },
    sources: ['/api/__sitemap__/urls'],
    autoI18n: false
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    download: true,
    base64: true,
    display: 'swap',
    preload: true,
    prefetch: true,
    preconnect: true
  },
  postcss: {
    plugins: {
      tailwindcss: {
        configPath: './tailwind.config.js'
      },
      autoprefixer: {
        cascade: false
      }
    }
  },
  css: ['@fortawesome/fontawesome-free/css/all.css', '~/assets/main.scss'],
  vite: {
    resolve: {
      alias: {
        'vue-slick-carousel': resolve(__dirname, './stubs/vue-slick-carousel')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math"; @use "sass:color"; @use "sass:map";',
          quietDeps: true,
          silenceDeprecations: ['import', 'global-builtin', 'mixed-decls']
        }
      }
    }
  },
  image: {
    dir: 'public',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    formats: ['avif', 'webp'],
    quality: 80,
    ipx: {
      // Exclude our API route from IPX processing
      maxAge: 31536000
    }
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      ...Object.fromEntries(
        legacyRedirects.map(({ from, to }) => [from, { redirect: { to, statusCode: 301 } }])
      ),
      '/images/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' }
      },
      '/_nuxt/**': {
        headers: { 'cache-control': 'public, max-age=31536000, immutable' }
      },
      '/api/**': { cache: false }
    }
  },
  schemaOrg: {
    identity: defineOrganization({
      name: 'Rintio',
      url: 'https://rintio.com',
      logo: 'https://rintio.com/images/rintio.svg',
      description:
        "Rintio est une entreprise technologique qui fournit des services numériques et de conseils, et accompagne l'innovation et la transformation digitale des entreprises par la Data, l'IA, le DevOps et l'offshoring basé au Bénin.",
      email: 'contact@rintio.com',
      foundingDate: '2017',
      sameAs: [
        'https://web.facebook.com/RintioGroup/',
        'https://www.linkedin.com/company/rintio/',
        'https://twitter.com/RintioGroup/'
      ],
      address: [
        { addressLocality: 'Cotonou', addressCountry: 'BJ' },
        { addressLocality: 'Paris', addressCountry: 'FR' },
        { addressLocality: 'Abidjan', addressCountry: 'CI' }
      ]
    })
  },
  sourcemap: {
    client: 'hidden'
  },
  compatibilityDate: '2025-05-20',
  runtimeConfig: {
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    contentfulHost: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
    contentfulManagementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    brevoApiKey: process.env.BREVO_API_KEY,
    brevoSenderEmail: process.env.BREVO_SENDER_EMAIL || 'contact@rintio.com',
    brevoListId: Number(process.env.BREVO_LIST_ID) || 14,
    gtmId: process.env.GTM_ID || 'GTM-M83MD4M',
    public: {}
  }
})
