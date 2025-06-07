import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { signOut } from "firebase/auth"
import { auth } from "../config"


const handlePress = (): void => {
    signOut(auth)
        .then(() => {
            router.replace("/User/Login")
            console.log("Logout success")
        })
        .catch(() => {
            Alert.alert("ログアウトに失敗しました。")
        })
}

interface Props {
    logoutVisible?: boolean
}

const LogoutButton = ({ logoutVisible = false }: Props): JSX.Element => {
    return (

        < View>
            <TouchableOpacity onPress={handlePress}>
                <Text style={[styles.headerLogoutButton, logoutVisible && styles.logoutVisible]}>Logout</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    headerLogoutButton: {
        position: "absolute",
        right: 20,
        bottom: 56,
        color: "rgba(255, 255, 255,0.7)",
        display: 'none'
    },
    logoutVisible: {
        display: 'flex'
    }
})

export default LogoutButton
