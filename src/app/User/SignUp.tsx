import { JSX } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"

const handlePress = (): void => {
    //SignUp
    router.replace("/User/UserList")
}

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>SignUp</Header>
            <Link href="/User/Login" asChild>
                <BackButton backVisible={true}></BackButton>
            </Link>

            <Label>Mail Address</Label>
            <View style={styles.inputString}>
                <TextInput>

                </TextInput>
            </View>


            <Label>Password</Label>
            <View style={styles.inputString}>
                <TextInput>

                </TextInput>
            </View>
            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={handlePress}>SignUp</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    inputString: {
        height: 24,
        width: "90%",
        marginHorizontal: "5%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0)',
        justifyContent: "center",
        alignItems: "center"
    }

})

export default SignUp
