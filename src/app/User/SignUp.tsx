import { JSX } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"
import SignUpButton from "../../conponents/SignUpButton"
import LogoutButton from "../../conponents/LogoutButton"
import BackButton from "../../conponents/BackButton"
import EditButton from "../../conponents/EditButton"

const handlePress = (): void => {
    //SignUp
    router.push("/User/UserList")
}

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>SignUp</Header>
            <SignUpButton signUpVisible={false}></SignUpButton>
            <LogoutButton logoutVisible={false}></LogoutButton>
            <Link href="/User/Login" asChild>
                <BackButton backVisible={true}></BackButton>
            </Link>
            <EditButton editVisible={false}></EditButton>

            <StringInput label="Mail Address"></StringInput>

            <StringInput label="Password"></StringInput>
            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={handlePress}>SignUp</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }

})

export default SignUp
