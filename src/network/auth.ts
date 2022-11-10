import axios from "axios";


export async function login(googleIdToken: string): Promise<{ access_token: string }> {
    const { data } = await axios.post('/auth/login/', { idToken: googleIdToken })
    return data
}
