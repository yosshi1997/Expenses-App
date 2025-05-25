import { JSX } from "react"
import { Text, View, StyleSheet } from "react-native"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"

const Login = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={true} logoutVisible={false} backVisible={false} editVisible={false}>Login</Header>

            <StringInput label="Mail Address"></StringInput>

            <StringInput label="Password"></StringInput>

            <FooterButton>Login</FooterButton>
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
