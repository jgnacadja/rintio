export function useI18n() {
  return {
    t: (key: string) => key,
    locale: { value: 'fr' }
  }
}

export function useSwitchLocalePath() {
  return (locale: string) => (locale === 'fr' ? '/fr/' : '/')
}
