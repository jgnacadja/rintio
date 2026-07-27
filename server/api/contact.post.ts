export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const name = body?.name as string
  const email = body?.email as string
  const object = body?.object as string
  const message = body?.message as string

  if (!name || !email || !object || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Les champs name, email, object et message sont requis'
    })
  }

  const config = useRuntimeConfig()

  try {
    await $fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': config.brevoApiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: {
        sender: { name: 'Site Rintio', email: 'contact@rintio.com' },
        to: [{ email: 'contact@rintio.com' }],
        replyTo: { name, email },
        subject: `[Contact site] ${object}`,
        textContent: `Nom : ${name}\nEmail : ${email}\nObjet : ${object}\n\nMessage :\n${message}`
      }
    })

    return { success: true }
  } catch (error: any) {
    throw createError({
      statusCode: 502,
      statusMessage: error?.data?.message || "Échec de l'envoi de l'email via Brevo"
    })
  }
})
