import { JSX } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"
import { collection, doc, addDoc, setDoc, Timestamp } from "firebase/firestore"
import { db, auth } from "../../config"
import { useState } from "react"

const handlePress = async (userName: string, userInitial: string): Promise<void> => {
    if (!auth.currentUser) return;

    const userId = auth.currentUser.uid;

    try {
        // ✅ userName をドキュメントIDとして明示指定
        const userDocRef = doc(db, `users/${userId}/userList/${userName}`);
        await setDoc(userDocRef, {
            userName,
            upDateTime: Timestamp.fromDate(new Date())
        });
        console.log("userList 作成成功");

        // ✅ data は addDoc でランダムIDに追加（問題なし）
        const dataRef = collection(db, `users/${userId}/userList/${userName}/categories/income0/ym/0/data`);
        await addDoc(dataRef, {
            userInitial,
            addDate: Timestamp.fromDate(new Date())
        });
        console.log("data 作成成功");

        router.replace("/User/UserList");

    } catch (error) {
        console.log("エラー:", error);
    }
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
                <TextInput value={userName} onChangeText={(text) => { setUserName(text) }} autoFocus>

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
