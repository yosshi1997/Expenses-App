import { JSX } from "react"
import { Text, View, StyleSheet } from "react-native"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"

const NewCategory = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} logoutVisible={false} backVisible={true} editVisible={false}>New Category</Header>

            <StringInput label="User" defaultValue="Yoshimasa"></StringInput>

            <StringInput label="Category Name">SBI銀行</StringInput>

            <StringInput label="Income or Expense">Income</StringInput>


            <AddButton rotate={false}>∨</AddButton>
            <FooterButton>{"Add New\nCategory"}</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }

})

export default NewCategory
