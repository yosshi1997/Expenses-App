import { JSX } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db, auth } from "../../config"
import { useState } from "react"

const handlePress = (userName: string, userInitial: string): void => {
    //Add New User
    if (auth.currentUser === null) { return }

    const ref = collection(db, `users/${auth.currentUser?.uid}/userList/${userName}/categories/income0/data`)

    addDoc(ref, {
        userInitial,
        addDate: Timestamp.fromDate(new Date())
    })
        .then((docRef) => {
            console.log("success", docRef.id)
            router.replace("/User/UserList")
        })
        .catch((error) => {
            console.log(error)
        })

}

const handleBack = (): void => {
    //Category Save
    router.back()
}


const NewUser = (): JSX.Element => {
    const [userName, setUserName] = useState("")
    const [userInitial, setUserInitial] = useState("")

    return (
        <View style={styles.container}>

            {/* header */}
            <Header>NewUser</Header>
            <BackButton backVisible={true} onPress={handleBack}></BackButton>
            <Label>User Name</Label>
            <View style={styles.inputString}>
                <TextInput value={userName} onChangeText={(text) => { setUserName(text) }}>

                </TextInput>
            </View>

            <Label>Initial Value</Label>
            <View style={styles.inputString}>
                <TextInput value={userInitial} onChangeText={(text) => { setUserInitial(text) }}>

                </TextInput>
            </View>

            <AddButton rotate={false}>∨</AddButton>

            <FooterButton onPress={() => { handlePress(userName, userInitial) }}>Add New User</FooterButton>
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

export default NewUser
