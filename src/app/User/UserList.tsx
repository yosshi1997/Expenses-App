import { JSX } from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import UserListItem from "../../conponents/UserListItem"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import LogoutButton from "../../conponents/LogoutButton"


const handlePress = (): void => {
    //Trend Check
    router.push("/User/TrendCheck")
}

const handleNewUser = (): void => {
    //Trend Check
    router.push("/User/NewUser")
}


const UserList = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* header */}
            <Header>Main Menu</Header>
            <LogoutButton logoutVisible={true}></LogoutButton>

            {/* User List Scroll */}
            <ScrollView style={styles.userListScroll}>
                <UserListItem updateTime="2025.04.30 13:14 更新"
                    onPress={() => router.push({ pathname: "/User/UserDetail", params: { userName: "Yoshimasa" } })}>Yoshimasa</UserListItem>
                <UserListItem updateTime="2025.04.30 13:14 更新"
                    onPress={() => router.push({ pathname: "/User/UserDetail", params: { userName: "Aya" } })}>Aya</UserListItem>
                <UserListItem updateTime="2025.04.30 13:14 更新"
                    onPress={() => router.push({ pathname: "/User/UserDetail", params: { userName: "Family" } })}>Family</UserListItem>
                <View style={styles.scrollMargin}></View>
            </ScrollView>

            {/* rotate={true}なら45度回転 */}
            <AddButton rotate={true} >+</AddButton>
            {/* visible={true}なら表示 */}
            <NewUserButton visible={true} onPress={handleNewUser}>New User</NewUserButton>
            <FooterButton onPress={handlePress}>Trend Check</FooterButton>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    userListScroll: {
        flexGrow: 1, // 内容に応じてスクロール可能にする
    },
    scrollMargin: {
        height: 200
    }
})

export default UserList



