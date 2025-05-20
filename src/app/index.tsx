import { JSX } from "react"
import { View, StyleSheet } from "react-native"

import Header from "../conponents/Header"
import UserListItem from "../conponents/UserListItem"
import AddButton from "../conponents/AddButton"
import NewUserButton from "../conponents/NewUserButton"
import FooterButton from "../conponents/FooterButton"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* header */}
            <Header />

            {/* User List Scroll */}
            <View>
                <UserListItem />
                <UserListItem />
                <UserListItem />
            </View>

            <AddButton />
            <NewUserButton />
            <FooterButton />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }
})

export default Index


{/* フォント編集
    headerTitle
    userName
    newUserButtonText
    footerButtonText */ }
