export const globalMock = {
  mocks: {
    $t: (key: string) => key,
    $tc: (key: string) => key,
    $tp: (key: string) => key,
    $i18n: {
      locale: 'en'
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
