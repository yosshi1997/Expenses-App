import { JSX } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"

const handlePress = (): void => {
    //SignUp
    router.push("/User/UserList")
}

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} loginVisible={true} logoutVisible={false} backVisible={false} editVisible={false}>SignUp</Header>

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
