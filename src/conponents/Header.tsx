
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
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
            < View>
                <TouchableOpacity>
                    <Text style={[styles.headerSignUpButton, signUpVisible && styles.signUpVisible]}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.headerLogoutButton, logoutVisible && styles.logoutVisible]}>Logout</Text>
                </TouchableOpacity>
            </View >
            {/* header bottom */}
            < View style={styles.headerBottom} >
                <TouchableOpacity style={[styles.headerBackButton, backVisible && styles.backVisible]}>
                    <Text style={styles.headerBackButtonText}>＜Back</Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>{children}</Text>

                <TouchableOpacity style={[styles.headerEditButton, editVisible && styles.editVisible]}>
                    <Text style={styles.headerEditButtonText}>
                        <MaterialIcons name="edit" size={20} />
                    </Text>
                </TouchableOpacity>


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

        display: 'none'
    },
    headerEditButtonText: {
        color: "rgba(255, 255, 255,0.7)",
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
    headerBackButtonText: {
        color: "rgba(255, 255, 255,0.7)",
    },
    backVisible: {
        display: 'flex'
    },
})

export default Header
