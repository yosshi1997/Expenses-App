import { JSX } from "react"
import { View, StyleSheet } from "react-native"

import Header from "../../conponents/Header"
import UserListItem from "../../conponents/UserListItem"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"

const UserList = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* header */}
            <Header signUpVisible={false} logoutVisible={true} backVisible={false} editVisible={true}>Main Menu</Header>

            {/* User List Scroll */}
            <View>
                <UserListItem updateTime="2025.04.30 13:14 更新">Yoshimasa</UserListItem>
                <UserListItem updateTime="2025.04.30 14:14 更新">Aya</UserListItem>
                <UserListItem updateTime="2025.04.30 15:14 更新">Family</UserListItem>
            </View>

            {/* rotate={true}なら45度回転 */}
            <AddButton rotate={true} />
            {/* visible={true}なら表示 */}
            <NewUserButton visible={true} />
            <FooterButton>Trend Check</FooterButton>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }
})

export default UserList


{/* フォント編集
    headerTitle
    userName
    newUserButtonText
    footerButtonText */ }
