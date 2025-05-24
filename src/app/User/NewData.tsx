import { JSX } from "react"
import { Text, View, StyleSheet } from "react-native"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"

const NewData = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} logoutVisible={true} backVisible={true} editVisible={true}>Yoshimasa</Header>


            {/* rotate={true}なら45度回転 */}
            <AddButton rotate={true} />

            {/* visible={true}なら表示 */}
            <NewUserButton visible={true}>New Category</NewUserButton>
            <FooterButton>New Data</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }

})

export default NewData
