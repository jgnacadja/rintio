import { createI18n, type I18nOptions } from 'vue-i18n'

export const i18nConfig: I18nOptions = {
  legacy: false,
  locale: 'fr',
  messages: {
    fr: {}
  }
}

export const i18n = (config: I18nOptions = i18nConfig) => createI18n(config)

export const globalMock = {
  mocks: {
    $t: (key: string) => key,
    $tc: (key: string) => key,
    $tp: (key: string) => key,
    $i18n: {
      locale: 'fr'
    }
  },
  stubs: {
    NuxtLayout: {
      template: '<div><slot/></div>'
    },
    NuxtLink: {
      template: '<a><slot/></a>'
    },
    'router-link': {
      template: '<a><slot/></a>'
    }
  }
}

export default globalMock
