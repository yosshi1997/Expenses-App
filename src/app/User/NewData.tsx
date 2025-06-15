import { JSX, useState } from "react"
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native"
import { useLocalSearchParams, Link, router } from "expo-router"

import Header from "../../conponents/Header"
import FooterButton from "../../conponents/FooterButton"
import AddButton from "../../conponents/AddButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db, auth } from "../../config"

const handlePress = (userNameString: string, Year: number, Month: number, Category: string, IncomeExpense: number): void => {
    if (auth.currentUser === null) { return }

    //アカウント/ユーザー名(入力値)/カテゴリ(income0)/data(入力値)
    const ref = collection(db,
        `users/${auth.currentUser?.uid}/userList/${userNameString}/categories/${Category}/ym/${Year}:${Month}/data`)

    addDoc(ref, {
        IncomeExpense,
        addDate: Timestamp.fromDate(new Date())
    })
        .then((docRef) => {
            console.log("success", docRef.id)
            router.replace({
                pathname: "/User/UserDetail",
                params: { userName: userNameString }
            });
        })
        .catch((error) => {
            console.log(error)
        })

}

const handleBack = (): void => {
    //Category Save
    router.back()
}

const NewData = (): JSX.Element => {
    const [Year, setYear] = useState("")
    const [Month, setMonth] = useState("")
    const [Category, setCategory] = useState("")
    const [IncomeExpense, setIncomeExpense] = useState("")
    const { userName } = useLocalSearchParams()
    const userNameString = typeof userName === 'string' ? userName : ''

    return (
        <View style={styles.container}>
            {/* header */}
            <Header>{userName} NewData</Header>
            <BackButton backVisible={true} onPress={handleBack}></BackButton>

            <Label>Year</Label>
            <View style={styles.inputString}>
                <TextInput value={Year} onChangeText={(text) => { setYear(text) }}>

                </TextInput>
            </View>

            <Label>Month</Label>
            <View style={styles.inputString}>
                <TextInput value={Month} onChangeText={(text) => { setMonth(text) }}>

                </TextInput>
            </View>

            <Label>Category</Label>
            <View style={styles.inputString}>
                <TextInput value={Category} onChangeText={(text) => { setCategory(text) }}>

                </TextInput>
            </View>

            <Label>Income/Expense</Label>
            <View style={styles.inputString}>
                <TextInput value={IncomeExpense} onChangeText={(text) => { setIncomeExpense(text) }}>

                </TextInput>
            </View>


            <View style={styles.noteText}>
                <Text>
                    ※収入は正の値、支出は負の値で入力
                </Text>
            </View>
            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={() => { handlePress(userNameString, Year, Month, Category, IncomeExpense) }}>Add New Data</FooterButton>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    noteText: {
        alignItems: "center"
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

export default NewData
