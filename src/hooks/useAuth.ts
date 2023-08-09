
import {auth, db} from "@/firebase/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "@firebase/auth";
import {
    collection,
    getDocs,
    getDoc, addDoc,
} from "firebase/firestore";
import Player from "@/core/Player";

// Define o idioma padrão do auth
auth.useDeviceLanguage();

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
    async function register(name: string, username: string, email: string, password: string) {

        try {

            const res = await createUserWithEmailAndPassword(auth, email, password)
            const user = res.user

            const player = new Player(
                user.uid,
                name,
                username,
                email,
                user.photoURL,
                [],
                []
            )

            await addDoc(collection(db, "players"), {
                player: player.toJSON()
            })
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

    //Função de ‘login’/cadastro' com o google
    const provider = new GoogleAuthProvider();

    async function loginOrRegisterWithGoogle() {
        console.log("login with google")
        try {
            const res = await signInWithPopup(auth, provider)
            console.log(res.user)
        } catch (e: any) {
            console.log(e.code)
            if (e.code === "auth/account-exists-with-different-credential") {
                console.log("account exists with different credential")
            } else if (e.code === "auth/invalid-credential") {
                console.log("invalid credential")
            } else if (e.code === "auth/operation-not-allowed") {
                console.log("operation not allowed")
            } else if (e.code === "auth/user-disabled") {
                console.log("user disabled")
            } else if (e.code === "auth/user-not-found") {
                console.log("user not found")
            } else if (e.code === "auth/wrong-password") {
                console.log("wrong password")
            }
        }
    }

    // Função de ‘esqueci minha senha’
    async function forgotPassword(email: string) {
        try {
            await sendPasswordResetEmail(auth, email)
            alert("Email enviado com sucesso!")
        } catch (e: any) {
            if (e.code === "auth/invalid-email") {
                console.log("invalid email")
                alert("Email inválido!")
            } else if (e.code === "auth/user-not-found") {
                console.log("user not found")
                alert("Usuário não encontrado!")
            }
        }
    }


    return {
        login,
        register,
        loginOrRegisterWithGoogle,
        forgotPassword,
    }
}