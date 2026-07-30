export default defineEventHandler(async (event) => {
  enforceRateLimit(event, { key: 'contact', max: 5, windowMs: 10 * 60 * 1000 })

  const body = await readBody(event)
  const name = body?.name?.trim() as string
  const email = body?.email?.trim() as string
  const object = body?.object?.trim() as string
  const message = body?.message?.trim() as string

  if (!name || !email || !object || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Les champs name, email, object et message sont requis'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Le champ email n'est pas une adresse email valide"
    })
  }

  const { sendContactEmail } = useBrevo()

  try {
    await sendContactEmail({ name, email, object, message })

    return { success: true }
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || error?.status || 502,
      statusMessage:
        error?.body?.message || error?.message || "Échec de l'envoi de l'email via Brevo"
    })
  }
})
