import { router } from "expo-router";
import { fiboAuth, updateAuthState } from "../auth/auth";
import { getCourses } from "../courses/courses";

export const handleCredentialResponse = async (response: any) => {
  const navigation = router;
  console.log('Handle Response');

  try {
    const res = await fetch(`${process.env.EXPO_PUBLIC_GOOGLE_END_POINT}${response.credential}`);
    const data = await res.json();
    updateAuthState(data);

    await fiboAuth({ credential: response.credential })
    .then(()=> console.log('Retriving UserData'))
    .catch((error) => {console.error("Failed to fetch user data:", error)})
    .then(()=> console.log('Retrived UserData'));

    const session_token = localStorage.getItem('fibo_session_token');
    await getCourses(session_token);

    navigation.replace('/application');
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};