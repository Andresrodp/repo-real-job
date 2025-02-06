import pool from "@/utils/conectionDb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM submissions WHERE document_number=$1 AND origin_submission=$2 LIMIT 1`,
      [id, "cooking_lessons"]
    );
    if (result.rowCount) {
      return NextResponse.json(
        {
          message: "Ya te has registrado a una de nuestras clases",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: "Puedes registrarte a nuestras clases",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    NextResponse.error(error.message);
  } finally {
    if (client) client.release();
  }
}
