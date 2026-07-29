export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = body?.email?.trim() as string
  const firstName = body?.firstName?.trim() as string
  const lastName = body?.lastName?.trim() as string

  if (!email || !firstName || !lastName) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Les champs email, firstName et lastName sont requis'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Le champ email n'est pas une adresse email valide"
    })
  }

  const { subscribeToNewsletter } = useBrevo()

  try {
    await subscribeToNewsletter({ email, firstName, lastName })

    return { success: true }
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || error?.status || 502,
      statusMessage:
        error?.body?.message || error?.message || "Échec de l'inscription à la newsletter"
    })
  }
})
