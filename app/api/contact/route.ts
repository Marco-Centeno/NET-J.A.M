import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nombre, email y mensaje son requeridos" }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: "NetJam Consulting <onboarding@resend.dev>", // puedes usar su dominio temporal
      to: "getoverwrite@gmail.com",            // tu correo real
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Empresa: ${company || "No especificada"}
        Mensaje: ${message}
      `,
    })

    if (error) {
      console.error(error)
      return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado exitosamente. Te contactaremos pronto.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
