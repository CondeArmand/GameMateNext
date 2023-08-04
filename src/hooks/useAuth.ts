import {auth} from "@/firebase/firebase";
import {signInWithEmailAndPassword} from "@firebase/auth";

export default function useAuth() {
    async function login(email: string, password: string) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("logged in")
        } catch (e: any) {
            console.log(e.code)
            if (e.code === "auth/user-not-found") {
                console.log("user not found")
            } else if (e.code === "auth/wrong-password") {
                console.log("wrong password")
            } else if (e.code === "auth/invalid-email") {
                console.log("invalid email")
            }
        }
    }


    return {
        login
    }
}