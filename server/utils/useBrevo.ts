import { BrevoClient } from '@getbrevo/brevo'

export interface ContactEmailData {
  name: string
  email: string
  object: string
  message: string
}

export function useBrevo() {
  const config = useRuntimeConfig()
  const apiKey = config.brevoApiKey as string
  const senderEmail = (config.brevoSenderEmail as string) || 'contact@rintio.com'

  const sendContactEmail = async (data: ContactEmailData) => {
    if (!apiKey) {
      throw new Error('Brevo API key not configured')
    }

    const client = new BrevoClient({ apiKey })

    return await client.transactionalEmails.sendTransacEmail({
      sender: { name: 'Site Rintio', email: senderEmail },
      to: [{ email: senderEmail }],
      replyTo: { name: data.name, email: data.email },
      subject: `[Contact site] ${data.object}`,
      textContent: `Nom : ${data.name}\nEmail : ${data.email}\nObjet : ${data.object}\n\nMessage :\n${data.message}`
    })
  }

  return { sendContactEmail }
}
