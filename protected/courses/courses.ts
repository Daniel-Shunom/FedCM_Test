export async function getCourses(token: string | null): Promise<any> {
  const response = await fetch('https://app.fibo.today/api/courses', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }).then(response => response.json())
    .catch(error => console.error('Error getting courses: ', error))
    .finally(() => console.log('Fetched courses'))

  console.log(response)
  return response
}