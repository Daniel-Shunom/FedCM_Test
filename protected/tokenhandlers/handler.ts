import { router } from "expo-router";
import { fiboAuth, updateAuthState } from "../auth/auth";
import { getCourses } from "../courses/courses";
import { User } from "@/context/types";

export const handleCredentialResponse = async (response: any): Promise<User> => {
  
  const navigation = router;
  const loaded_user: User = {
    email: null,
    name: null,
    fiboToken: null,
    clientToken: null
  }

  try {
    const res = await fetch(`${process.env.EXPO_PUBLIC_GOOGLE_END_POINT}${response.credential}`);
    const data = await res.json();
    updateAuthState(data);

    await fiboAuth({ credential: response.credential })
    .then(()=> console.log('Retriving UserData'))
    .catch((error) => {console.error("Failed to fetch user data:", error)})
    .then(()=> console.log('Retrived UserData'));

    const session_token = localStorage.getItem('fibo_session_token');
    loaded_user.email = data.email;
    loaded_user.name = data.name;
    loaded_user.fiboToken = session_token;
    loaded_user.clientToken = response.credential;

    await getCourses(session_token);

    navigation.replace('/application');
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }

  return loaded_user
};