import { JSX } from "react"
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native"
import { Link, router } from "expo-router"
import { useState } from "react"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import SignUpButton from "../../conponents/SignUpButton"
import Label from "../../conponents/Label"
import { auth } from "../../config"
import { signInWithEmailAndPassword } from "firebase/auth"

const handlePress = (email: string, password: string): void => {
    //Firebaseにあるユーザー情報を照会し、該当するものにログインする。
    signInWithEmailAndPassword(auth, email, password)
        .then((userCedential) => {
            console.log(userCedential.user.uid)
            router.replace("/User/UserList")
        })
        .catch((error) => {
            const { code, message } = error
            console.log(code, message)
            Alert.alert(message)
        }
        )
}

const Login = (): JSX.Element => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>Login</Header>
            <Link href="/User/SignUp" asChild>
                <SignUpButton signUpVisible={true}></SignUpButton>
            </Link>

            <Label>Mail Address</Label>
            <View style={styles.inputString}>
                <TextInput value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="e-mail address"
                    autoFocus />

            </View>


            <Label>Password</Label>
            <View style={styles.inputString}>
                <TextInput value={password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="password" />
            </View>


            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={() => { handlePress(email, password) }}>Login</FooterButton>
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

export default Login
