import { defineNuxtConfig } from 'nuxt/config'
import { defineOrganization } from 'nuxt-schema-org/schema'

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
      title: 'Rintio — We involve for a better life',
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    '@stefanobartoletti/nuxt-social-share',
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
    defaults: { changefreq: 'monthly', priority: 0.5 }
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
      logo: 'https://rintio.com/logo.png'
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
    mailjetApiKey: process.env.MAILJET_API_KEY,
    mailjetApiSecret: process.env.MAILJET_API_SECRET,
    mailjetListId: Number(process.env.MAILJET_LIST_ID) || 42219,
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailjsUserId: process.env.EMAILJS_USER_ID,
    gtmId: process.env.GTM_ID || 'GTM-M83MD4M',
    public: {}
  }
})
