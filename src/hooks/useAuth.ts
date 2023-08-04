import {auth} from "@/firebase/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "@firebase/auth";

export default function useAuth() {
    // Funções de ‘login’
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

    // Funções de ‘cadastro’
    async function register(email: string, password: string) {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert("Cadastro realizado com sucesso!")
        } catch (e: any) {
            if (e.code === "auth/email-already-in-use") {
                console.log("email already in use")
                alert("Email já cadastrado!")
            } else if (e.code === "auth/invalid-email") {
                console.log("invalid email")
                alert("Email inválido!")
            } else if (e.code === "auth/weak-password") {
                console.log("weak password")
                alert("Senha fraca! Deve ter mais de 6 caracteres.")
            }
        }
    }


    return {
        login,
        register
    }
}