export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observe-visibility', {
    getSSRProps() {
      return {}
    },
    mounted(el, binding) {
      if (!import.meta.client) return

      const { callback, once } = binding.value || {}

      const handler = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (typeof callback === 'function') {
            callback(entry.isIntersecting, entry)
          }
          if (once && entry.isIntersecting && el._observeVisibilityObserver) {
            el._observeVisibilityObserver.disconnect()
          }
        })
      }

      const observer = new IntersectionObserver(handler, { threshold: 0.1 })
      el._observeVisibilityObserver = observer
      observer.observe(el)
    },
    unmounted(el) {
      el._observeVisibilityObserver?.disconnect()
    }
  })
})
