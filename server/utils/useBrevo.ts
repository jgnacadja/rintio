import { BrevoClient } from '@getbrevo/brevo'

export interface ContactEmailData {
  name: string
  email: string
  object: string
  message: string
}

export interface NewsletterData {
  email: string
  firstName: string
  lastName: string
}

export function useBrevo() {
  const config = useRuntimeConfig()
  const apiKey = config.brevoApiKey as string
  const senderEmail = (config.brevoSenderEmail as string) || 'contact@rintio.com'
  const listId = Number(config.brevoListId) || 14

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

  const subscribeToNewsletter = async (data: NewsletterData) => {
    if (!apiKey) {
      throw new Error('Brevo API key not configured')
    }

    const client = new BrevoClient({ apiKey })

    return await client.contacts.createContact({
      email: data.email,
      attributes: {
        PRENOM: data.firstName,
        NOM: data.lastName
      },
      listIds: [listId],
      updateEnabled: true
    })
  }

  return { sendContactEmail, subscribeToNewsletter }
}
