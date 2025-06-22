import { JSX, useState } from "react"
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, Alert } from "react-native"
import { useLocalSearchParams, Link, router } from "expo-router"

import Header from "../../conponents/Header"
import FooterButton from "../../conponents/FooterButton"
import AddButton from "../../conponents/AddButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"
import { doc, setDoc, Timestamp } from "firebase/firestore"
import { db, auth } from "../../config"

const handlePress = async (
    userNameString: string,
    Year: string,
    Month: string,
    Category: string,
    IncomeExpenseString: string
): Promise<void> => {

    if (!userNameString || !Year || !Month || !Category || !IncomeExpenseString) {
        console.log("入力が不完全です");
        Alert.alert("入力エラー", "入力が不完全です")
        return;
    }

    if (auth.currentUser === null) { return }

    const userId = auth.currentUser.uid;
    const IncomeExpense = Number(IncomeExpenseString);
    const yearMonth = `${Year}:${Month}`;

    const userDocRef = doc(db, `users/${userId}/userList/${userNameString}`);
    try {
        await setDoc(userDocRef, {
            userName: userNameString,
            upDateTime: Timestamp.fromDate(new Date())
        });
        console.log("userList 更新成功");

        const categoryRef = doc(db, `users/${userId}/userList/${userNameString}/categories/${Category}`);
        await setDoc(categoryRef, {
            category: Category,
            upDateTime: Timestamp.fromDate(new Date())
        });
        console.log("category 更新成功");

        const ymRef = doc(db, `users/${userId}/userList/${userNameString}/categories/${Category}/ym/${yearMonth}`);
        await setDoc(ymRef, {
            ym: yearMonth,
            upDateTime: Timestamp.fromDate(new Date())
        });
        console.log("ym 更新成功");

        const dataRef = doc(db,
            `users/${userId}/userList/${userNameString}/categories/${Category}/ym/${yearMonth}/data`, "main");
        await setDoc(dataRef, {
            IncomeExpense,
            addDate: Timestamp.fromDate(new Date())
        });
        console.log("data 更新成功");

        console.log("ドキュメントを保存（置き換え）しました");
        Alert.alert("成功", "ドキュメントを保存（置き換え）しました")
        router.replace({
            pathname: "/User/UserDetail",
            params: { userName: userNameString }
        });
    }
    catch (error) {
        console.error("Firestore setDoc error:", error);
        Alert.alert("エラー", `Firestore setDoc error: ${error.message}`)
    }
}


const handleBack = (): void => {
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
                <TextInput value={Year} onChangeText={(text) => { setYear(text) }} autoFocus>

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
