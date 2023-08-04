const firebaseConfig = {
    apiKey: "AIzaSyCUEjaxTQvd6TlXkUtiTwiKGtiyP-QAdq8",
    authDomain: "gamematev1.firebaseapp.com",
    projectId: "gamematev1",
    storageBucket: "gamematev1.appspot.com",
    messagingSenderId: "800544016447",
    appId: "1:800544016447:web:0d32938171ff1b153c108a"
};

// Initialize Firebase
export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error("Firebase config is not set");
    } else {
        return firebaseConfig;
    }
}
