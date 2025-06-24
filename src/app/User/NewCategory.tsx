import { JSX, useState } from "react"
import { Text, View, StyleSheet, TextInput, Alert } from "react-native"
import { useLocalSearchParams, Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore"
import { db, auth } from "../../config"

const handlePress = async (
    userName: String,
    Category: String,
    IncomeExpense: String

): Promise<void> => {
    if (!userName || !Category || !IncomeExpense) {
        console.log("入力が不完全です");
        Alert.alert("入力エラー", "入力が不完全です")
        return;
    }

    if (auth.currentUser === null) { return }
    const userId = auth.currentUser.uid;

    const categoryRef = doc(db, `users/${userId}/userList/${userName}/categories/${Category}`);
    const docCategorySnap = await getDoc(categoryRef);
    if (docCategorySnap.exists()) {
        console.log("指定されたcategoryがすでに存在します");
        Alert.alert("失敗", "指定されたカテゴリーがすでに存在します")
        return;
    } else {
        await setDoc(categoryRef, {
            category: Category,
            IncomeOrExpense: IncomeExpense,
            upDateTime: Timestamp.fromDate(new Date())
        });
        console.log("category 作成成功");
        Alert.alert("成功", "カテゴリーを作成しました")

        router.replace({
            pathname: "/User/UserDetail",
            params: { userName: userName }
        });
    }

}

const handleBack = (): void => {
    //Category Save
    router.back()
}

const NewCategory = (): JSX.Element => {
    const [Category, setCategory] = useState("")
    const [IncomeExpense, setIncomeExpense] = useState("")
    const { userName } = useLocalSearchParams()

    return (
        <View style={styles.container}>

            {/* header */}
            <Header>{userName} New Category</Header>
            <BackButton backVisible={true} onPress={handleBack}></BackButton>

            {/* <Label>User</Label>
            <View style={styles.inputString}>
                <TextInput>
                    {userName}
                </TextInput>
            </View> */}

            <Label>Category Name</Label>
            <View style={styles.inputString}>
                <TextInput value={Category} onChangeText={(text) => { setCategory(text) }} autoFocus>

                </TextInput>
            </View>

            <Label>Income or Expense</Label>
            <View style={styles.inputString}>
                <TextInput value={IncomeExpense} onChangeText={(text) => { setIncomeExpense(text) }}>

                </TextInput>
            </View>

            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={() => { handlePress(userName, Category, IncomeExpense) }}>{"Add New\nCategory"}</FooterButton>
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

export default NewCategory
