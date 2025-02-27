import { router } from "expo-router";
import { fiboAuth, updateAuthState } from "../auth/auth";
import { getCourses } from "../courses/courses";

export const handleCredentialResponse = async (response: any) => {
  const navigation = router;
  console.log('Handle Response');

  try {
    const res = await fetch(`${process.env.EXPO_PUBLIC_GOOGLE_END_POINT}${response.credential}`);
    const data = await res.json();
    await fiboAuth({ credential: response.credential })
      .catch((error) => {console.error("Failed to fetch user data:", error)});
    console.log("Retrived user Data");
    updateAuthState(data);
    const session_token = await localStorage.getItem('fibo_session_token');
    await getCourses(session_token);

    navigation.replace('/application');
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};