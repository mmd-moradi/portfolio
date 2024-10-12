
import { ContactEmailTemplate } from "@/components/contact-email-temp";
import { Resend } from "resend";

type RequestBody = {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json() as RequestBody;
  console.log(name, email, message)
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <mmd@mmdmidev.site>",
      to: ["mmdmi.workspace@gmail.com", "mmdhk83@gmail.com"],
      subject: "New Message from Portfolio Contact Form",
      react: ContactEmailTemplate({name, email, message}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}









