import pool from "@/utils/conectionDb";
import { NextResponse } from "next/server";
import { optionsCourses } from "@/constants";
import { formatOptionsLabel } from "@/utils/methods";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city");
  const query = `SELECT course_code, COUNT(*) as count
    FROM submissions
    WHERE origin_submission = $1 AND city = $2
    GROUP BY course_code
  `;
  const values = ["cooking_lessons", city];
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(query, values);
    if (result.rows.length === 0) {
      const optionsSelect = optionsCourses.map((course) => {
        return {
          label: formatOptionsLabel(course),
          value: course,
        };
      });
      return NextResponse.json(optionsSelect);
    }
    const optionsSelect2 = [];

    for (const course of optionsCourses) {
      const row = result.rows.find((r) => r.course_code === course);
      if (!row || Number(row.count) < 35) {
        optionsSelect2.push({
          label: formatOptionsLabel(course),
          value: course,
        });
      }
    }
    return NextResponse.json(optionsSelect2);
  } catch (error) {
    console.log(error);
    return NextResponse.error(error.message);
  } finally {
    if (client) client.release();
  }
}
