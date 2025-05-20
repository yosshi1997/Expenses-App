
import { View, Text, StyleSheet } from "react-native"

const Header = (): JSX.Element => {
    return (
        < View style={styles.header} >
            {/* header top */}
            < View >
                <Text style={styles.headerSignUpButton}>SignUp</Text>
                <Text style={styles.headerLogoutButton}>Logout</Text>
            </View >
            {/* header bottom */}
            < View style={styles.headerBottom} >
                <Text style={styles.headerBackButton}>＜Back</Text>
                <Text style={styles.headerTitle}>Main Menu</Text>
                <Text style={styles.headerEditButton}>Edit</Text>
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
    },
    headerLogoutButton: {
        position: "absolute",
        right: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
    },
    headerBottom: {
        alignItems: "center"
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
        color: "rgb(255, 255, 255)"
    },
    headerEditButton: {
        position: "absolute",
        right: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)"
    },
    headerBackButton: {
        position: "absolute",
        left: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)"
    }
})

export default Header
