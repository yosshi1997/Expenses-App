import { JSX } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"


const Login = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} loginVisible={false} logoutVisible={false} backVisible={true} editVisible={false}>Trend</Header>

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
