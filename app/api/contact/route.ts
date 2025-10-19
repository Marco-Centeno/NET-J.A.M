import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Solo inicializar si la variable existe
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      console.error("RESEND_API_KEY no configurada")
      return NextResponse.json(
        { error: "Servicio de correo no disponible" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos" },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: "NetJam Consulting <onboarding@resend.dev>", // dominio temporal de Resend
      to: "getoverwrite@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Empresa: ${company || "No especificada"}
        Mensaje: ${message}
      `,
    })

    if (error) {
      console.error("Error de Resend:", error)
      return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado exitosamente. Te contactaremos pronto.",
    })
  } catch (error) {
    console.error("Error procesando formulario:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
