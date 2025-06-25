import { JSX } from "react"
import { Text, View, StyleSheet, TextInput, Alert } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"
import { collection, doc, addDoc, setDoc, getDoc, getDocs, where, Timestamp, query } from "firebase/firestore"
import { db, auth } from "../../config"
import { useState } from "react"

const handlePress = async (userName: string, userInitial: string): Promise<void> => {
    if (!auth.currentUser) return;

    const userId = auth.currentUser.uid;
    const userInitialNumber = Number(userInitial);
    const ref = collection(db, `users/${userId}/userList`);
    const q = query(ref, where("userName", "==", userName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        Alert.alert(`${userName} \n のデータは既に存在します。\n 別の名前を入力してください。`)
    } else {
        //userNameの作成
        try {
            const userRef = doc(db, `users/${userId}/userList/${userName}`);
            await setDoc(userRef, {
                userName,
                upDateTime: Timestamp.fromDate(new Date())
            });
            console.log("userList 作成成功");
        }
        catch (error) {
            console.log("エラー:", error);
        }

        //ymの作成
        try {
            const ymRef = doc(db, `users/${userId}/userList/${userName}/ym/0`);
            await setDoc(ymRef, {
                ym: "0",
                upDateTime: Timestamp.fromDate(new Date())
            });
            console.log("ym 作成成功");
        }
        catch (error) {
            console.log("エラー:", error);
        }

        //maincategoryの作成
        try {
            const dataRef = doc(db, `users/${userId}/userList/${userName}/ym/0/categories/main`);
            await setDoc(dataRef, {
                userInitialNumber,
                addDate: Timestamp.fromDate(new Date())
            });
            console.log("maindata 作成成功");
        }
        catch (error) {
            console.log("エラー:", error);
        }

        router.replace("/User/UserList");


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
