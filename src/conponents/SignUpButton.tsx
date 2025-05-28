import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Link } from "expo-router"

interface Props {
    signUpVisible?: boolean
}



const SignUpButton = ({ signUpVisible = false }: Props): JSX.Element => {
    return (
        < View>
            <Link href="/User/SignUp" asChild>
                <TouchableOpacity>
                    <Text style={[styles.headerSignUpButton, signUpVisible && styles.signUpVisible]}>SignUp</Text>
                </TouchableOpacity>
            </Link>
        </View >
    )
}

const styles = StyleSheet.create({
    headerSignUpButton: {
        position: "absolute",
        left: 20,
        bottom: 56,
        color: "rgba(255, 255, 255,0.7)",
        display: 'none'
    },
    signUpVisible: {
        display: 'flex'
    }
})

export default SignUpButton
