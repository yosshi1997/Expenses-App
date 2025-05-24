
import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
interface Props {
    children: string;
    signUpVisible?: boolean
    logoutVisible?: boolean
    backVisible?: boolean
    editVisible?: boolean
}
const Header = ({
    children, signUpVisible = false, logoutVisible = false, backVisible = false, editVisible = false }: Props): JSX.Element => {
    return (
        < View style={styles.header} >
            {/* header top */}
            < View >
                <Text style={[styles.headerSignUpButton, signUpVisible && styles.signUpVisible]}>SignUp</Text>
                <Text style={[styles.headerLogoutButton, logoutVisible && styles.logoutVisible]}>Logout</Text>
            </View >
            {/* header bottom */}
            < View style={styles.headerBottom} >
                <Text style={[styles.headerBackButton, backVisible && styles.backVisible]}>＜Back</Text>
                <Text style={styles.headerTitle}>{children}</Text>
                <Text style={[styles.headerEditButton, editVisible && styles.editVisible]}>
                    <MaterialIcons name="edit" size={20} />
                </Text>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgb(25, 25, 25)",
        height: 120,
        justifyContent: "flex-end"
    },
    headerSignUpButton: {
        position: "absolute",
        left: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
        display: 'none'
    },
    signUpVisible: {
        display: 'flex'
    },
    headerLogoutButton: {
        position: "absolute",
        right: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
        display: 'none'
    },
    logoutVisible: {
        display: 'flex'
    },
    headerBottom: {
        alignItems: "center"
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
        color: "rgb(255, 255, 255)",
    },
    headerEditButton: {
        position: "absolute",
        right: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
        display: 'none'
    },
    editVisible: {
        display: 'flex'
    },
    headerBackButton: {
        position: "absolute",
        left: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
        display: 'none'
    },
    backVisible: {
        display: 'flex'
    },
})

export default Header
