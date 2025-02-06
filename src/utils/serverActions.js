"use Server";

export async function validateDocument(document) {
  if (!document) return;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/submissions/${document}`
  );
  if (response.status === 200) return;
  const data = await response.json();
  return data;
}

export async function submitForm(data) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/submissions`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.status === 400) {
    const { message } = await response.json();
    return {
      error: true,
      message,
    };
  }
  if (response.status === 200) {
    const data = await response.json();
    return {
      error: false,
      data,
    };
  }
}
