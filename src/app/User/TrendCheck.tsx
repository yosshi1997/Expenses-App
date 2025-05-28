import { JSX } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"
import SignUpButton from "../../conponents/SignUpButton"
import LogoutButton from "../../conponents/LogoutButton"
import BackButton from "../../conponents/BackButton"
import EditButton from "../../conponents/EditButton"


const Login = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>TrendCheck</Header>
            <SignUpButton signUpVisible={false}></SignUpButton>
            <LogoutButton logoutVisible={false}></LogoutButton>
            <BackButton backVisible={true}></BackButton>
            <EditButton editVisible={false}></EditButton>

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
