import { vi } from 'vitest'
import { ref } from 'vue'

// Vitest global setup
vi.mock('#imports', () => ({
  useI18n: () => ({
    t: (key: string) => key,
    locale: { value: 'fr' }
  }),
  useSwitchLocalePath: () => (locale: string) => (locale === 'fr' ? '/fr' : '/')
}))

vi.stubGlobal('useHead', vi.fn())
vi.stubGlobal('useRuntimeConfig', () => ({
  public: {},
  contentful: {
    spaceId: 'test-space-id',
    managementToken: 'test-management-token',
    accessToken: 'test-access-token',
    host: 'test-host'
  }
}))
vi.stubGlobal('$fetch', vi.fn().mockResolvedValue({ success: true }))
vi.stubGlobal(
  'useLazyFetch',
  vi.fn().mockReturnValue({ data: ref(null), pending: ref(false), error: ref(null) })
)
vi.stubGlobal(
  'useFetch',
  vi.fn().mockReturnValue({ data: ref(null), pending: ref(false), error: ref(null) })
)
vi.stubGlobal(
  'useAsyncData',
  vi.fn().mockReturnValue({ data: ref(null), pending: ref(false), error: ref(null) })
)
vi.stubGlobal('useRoute', () => ({ path: '/', query: {}, params: {} }))
vi.stubGlobal('useRouter', () => ({ push: vi.fn(), replace: vi.fn() }))
vi.stubGlobal('defineNuxtComponent', (comp: any) => comp)
vi.stubGlobal('definePageMeta', vi.fn())
vi.stubGlobal('useNuxtApp', () => ({
  $t: (key: string) => key,
  $tp: (key: string) => key,
  $i18n: { locale: 'fr' }
}))
vi.stubGlobal(
  'useI18n',
  vi.fn().mockImplementation(() => ({
    t: (key: string) => key,
    locale: {
      value: 'fr'
    }
  }))
)

class ResizeObserverMock {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

class IntersectionObserverMock {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
