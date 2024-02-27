export async function onRequestPost() {
  return new Response('Logged out successfully', {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `userToken=; HttpOnly; Secure; Path=/; SameSite=Lax; expires=Thu, 01 Jan 1970 00:00:00 GMT;`,
    },
  });
}
