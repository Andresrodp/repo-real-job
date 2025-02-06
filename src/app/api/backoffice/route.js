import {NextResponse} from "next/server";
import pool from "@/utils/conectionDb";

export async function GET(request) {
  let client;
  try {
    client = await pool.connect();
    const res = await client.query("SELECT * FROM submissions");

    return NextResponse.json(res.rows);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  } finally {
    client.release();
  }
}
