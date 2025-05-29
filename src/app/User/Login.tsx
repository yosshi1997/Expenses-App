import { JSX } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"
import SignUpButton from "../../conponents/SignUpButton"

const handlePress = (): void => {
    //ログイン
    router.replace("/User/UserList")
}

const Login = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>Login</Header>
            <Link href="/User/SignUp" asChild>
                <SignUpButton signUpVisible={true} ></SignUpButton>
            </Link>

            <StringInput label="Mail Address"></StringInput>

            <StringInput label="Password"></StringInput>

            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={handlePress}>Login</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }

})

export default Login
