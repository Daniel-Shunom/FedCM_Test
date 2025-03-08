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

export async function getCoreCourses(): Promise<JSON|undefined> {
  const token = process.env.EXPO_PUBLIC_MOODLE_TOKEN;
  const MoodleUrl: string|undefined = process.env.EXPO_PUBLIC_MOODLE_URL;
  const method: string|undefined = process.env.EXPO_PUBLIC_MOODLE_COURSES;
  const format: string|undefined = process.env.EXPO_PUBLIC_MOODLE_FORMAT;
  const url: string|undefined = `${MoodleUrl}/webservice/rest/server.php`;
  const body: string|undefined = `wstoken=${token}&wsfunction=${method}&moodlewsrestformat=${format}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Moodle courses API response: ', result)
    return result;
  } catch (error) {
    console.error("Error calling Moodle API:", error);
    return undefined;
  }
}

export async function getCoreCalendarEvents(): Promise<JSON|undefined> {
  const token = process.env.EXPO_PUBLIC_MOODLE_TOKEN;
  const MoodleUrl: string|undefined = process.env.EXPO_PUBLIC_MOODLE_URL;
  const method: string|undefined = process.env.EXPO_PUBLIC_MOODLE_CALENDAR_EVENTS;
  const format: string|undefined = process.env.EXPO_PUBLIC_MOODLE_FORMAT;
  const url: string|undefined = `${MoodleUrl}/webservice/rest/server.php`;
  const body: string|undefined = `wstoken=${token}&wsfunction=${method}&moodlewsrestformat=${format}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    })
    return response.json()
  } catch (e) {
    console.error('ERROR GETTING CALENDAR EVENTS: ', e)
    return
  }
}
