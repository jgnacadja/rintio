export function useContentful() {
  const config = useRuntimeConfig()
  const fetchEntries = async (query: Record<string, string>) => {
    const params = new URLSearchParams({ access_token: config.contentfulAccessToken, ...query })
    return await $fetch(
      `https://${config.contentfulHost}/spaces/${config.contentfulSpaceId}/environments/master/entries?${params}`
    )
  }
  return { fetchEntries }
}
