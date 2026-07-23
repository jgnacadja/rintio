export function useI18n() {
  return {
    locale: { value: 'en' }
  }
}

export function useSwitchLocalePath() {
  return (locale: string) => (locale === 'fr' ? '/fr/' : '/')
}
