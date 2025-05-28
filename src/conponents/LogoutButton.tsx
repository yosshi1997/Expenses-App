import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

interface Props {
    logoutVisible?: boolean
}
const LogoutButton = ({ logoutVisible = false }: Props): JSX.Element => {
    return (

        < View>
            <Link href="/User/Login" asChild>
                <TouchableOpacity>
                    <Text style={[styles.headerLogoutButton, logoutVisible && styles.logoutVisible]}>Logout</Text>
                </TouchableOpacity>
            </Link>
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
