import {query} from "@/utils/db";

export async function fetchSubmissions() {
  try {
    const { rows } = await query('SELECT * FROM submissions ORDER BY id ASC', []);
    return rows;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return [];
  }
}
