import { JSX } from "react"
import { Text, View, StyleSheet, TextInput, Alert } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"
import { useState } from "react"
import { auth } from "../../config"
import { createUserWithEmailAndPassword } from "firebase/auth"

const handlePress = (email: string, password: string): void => {
    //Firebaseに新たなユーザー情報を追加する。入力したメアドとパスワードでログインできるようにする。
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
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

const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>SignUp</Header>
            <Link href="/User/Login" asChild>
                <BackButton backVisible={true}></BackButton>
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
            <FooterButton onPress={() => { handlePress(email, password) }}>SignUp</FooterButton>
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
