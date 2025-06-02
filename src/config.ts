import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FB_AIP_KEY,
    authDomain: process.env.EXPO_PUBLIC__FB_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC__FB_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC__FB_STORAGE_BACKET,
    messagingSenderId: process.env.EXPO_PUBLIC__FB_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC__FB_APP_ID
};

const app = initializeApp(firebaseConfig)

const auth = initializeAuth(app, { performance: getReactNativePersistence(ReactNativeAsyncStorage) })

const db = getFirestore(app)

export { app, auth, db }
