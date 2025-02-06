import pool from "@/utils/conectionDb";
import { NextResponse } from "next/server";
import { z } from "zod";

const sqlInjectionPattern = /['"%;()\-]/;
// const regexDocumentNumber = /^((0?[7-9]\d{6})|(1[0-9][0-9]{8})|(9[0-9]{10}))$/;
const schema = z.object({
  name: z
    .string()
    .max(50, "El nombre debe tener máximo 50 caracteres")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message:
        "El campo Nombre completo no puede contener caracteres especiales",
    }),
  document_number: z
    .string()
    .min(5, "El documento debe tener al menos 6 dígitos")
    .max(20, "El documento debe tener máximo 20 dígitos")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message: "El campo Cédula no coincide con el formato esperado",
    }),
  phone: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .max(15, "El teléfono debe tener máximo 15 dígitos")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message:
        "El campo Número de celular no puede contener caracteres especiales",
    }),
  email: z
    .string()
    .email("El email no es válido")
    .max(55, "El email debe tener máximo 55 caracteres"),
  city: z.string().refine((val) => !sqlInjectionPattern.test(val), {
    message: "El campo Ciudad no puede contener caracteres especiales",
  }),
  course_code: z.enum(["ITALIANA", "MEDITERRANEA", "TAPAS", "BRUNCH", "PIZZA"]),
  origin_submission: z.string(),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const data = schema.safeParse(body);
    if (!data.success) {
      return NextResponse.json(
        { message: data.error.errors[0].message },
        { status: 400 }
      );
    }
    const client = await pool.connect();
    const register = await client.query(
      `SELECT 1 FROM submissions WHERE document_number = $1 AND course_code = $2`,
      [body.document_number, body.course_code]
    );
    if (register.rows.length > 0) {
      return NextResponse.json(
        { message: "Ya te has registrado en otra clase" },
        { status: 400 }
      );
    }
    const res = await client.query(
      "INSERT INTO submissions (name, document_number, phone, email, city, origin_submission, course_code) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        body.name,
        body.document_number,
        body.phone,
        body.email,
        body.city,
        body.origin_submission,
        body.course_code,
      ]
    );
    client.release();
    return NextResponse.json(res.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
}
