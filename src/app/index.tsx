import { JSX } from "react"
import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                {/* header top */}
                <View>
                    <Text style={styles.headerSignUpButton}>SignUp</Text>
                    <Text style={styles.headerLogoutButton}>Logout</Text>
                </View>
                {/* header bottom */}
                <View style={styles.headerBottom}>
                    <Text style={styles.headerBackButton}>＜Back</Text>
                    <Text style={styles.headerTitle}>Main Menu</Text>
                    <Text style={styles.headerEditButton}>Edit</Text>
                </View>
            </View>

            {/* User List Scroll */}
            <View>
                {/* User List */}
                <View>
                    {/* User List Item */}
                    <View style={styles.userListItem}>
                        <View style={styles.userNameAndTime}>
                            <Text style={styles.userName}>Yoshimasa</Text>
                            <Text style={styles.updateTime}>2025.04.30 13:14 更新</Text>
                        </View>
                        <View style={styles.userListItemButton}>
                            <Text style={styles.userEditButton}>Edit</Text>
                        </View>
                    </View>

                    <View style={styles.userListItem}>
                        <View style={styles.userNameAndTime}>
                            <Text style={styles.userName}>Aya</Text>
                            <Text style={styles.updateTime}>2025.04.30 13:14 更新</Text>
                        </View>
                        <View style={styles.userListItemButton}>
                            <Text style={styles.userEditButton}>Edit</Text>
                        </View>
                    </View>

                    <View style={styles.userListItem}>
                        <View style={styles.userNameAndTime}>
                            <Text style={styles.userName}>Family</Text>
                            <Text style={styles.updateTime}>2025.04.30 13:14 更新</Text>
                        </View>
                        <View style={styles.userListItemButton}>
                            <Text style={styles.userEditButton}>Edit</Text>
                        </View>
                    </View>

                </View>
            </View>

            {/* Add Button add-button-resetクラスの追加・消去で回転 */}
            <View>
                <Text>＋</Text>
            </View>
            {/* New User Button new-user-button-noneクラスの追加・消去で表示・非表示 */}
            <View>
                <Text>New User</Text>
            </View>
            {/* Trend Check Button */}
            <View>
                <Text>Trend Check</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    header: {
        backgroundColor: "rgb(50, 50, 50)",
        height: 120,
        justifyContent: "flex-end"
    },
    headerSignUpButton: {
        position: "absolute",
        left: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
    },
    headerLogoutButton: {
        position: "absolute",
        right: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
    },
    headerBottom: {
        alignItems: "center"
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
        color: "rgb(255, 255, 255)"
    },
    headerEditButton: {
        position: "absolute",
        right: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)"
    },
    headerBackButton: {
        position: "absolute",
        left: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)"
    },
    userListItem: {
        backgroundColor: "rgb(138, 138, 138)",
        flexDirection: "row",
        height: 112,
        width: "90 %",
        marginTop: 16,
        marginLeft: "5%",
        marginRight: "5%",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'rgb(0, 0, 0)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4, // Android用
        justifyContent: "center"
    },
    userNameAndTime: {
        backgroundColor: "transparent",
        height: 64,
        width: "100 %",
        flexDirection: "colmn",
        justifyContent: "center",
        alignItems: "center",
        margin: 24
    },
    userName: {
        backgroundColor: "transparent",
        fontSize: 24,
        lineHeight: 32,
        color: "rgb(0, 0, 0)"
    },
    updateTime: {
        backgroundColor: "transparent",
        fontSize: 10,
        lineHeight: 24,
        color: "rgba(0, 0, 0,0.7)"
    },
    userListItemButton: {
        backgroundColor: "transparent",
        position: "absolute",
        right: 16,
        top: 8
    },
    userEditButton: {
        backgroundColor: "transparent",
        borderColor: 'transpatrent'
    },

})

export default Index


{/* ヘッダータイトルのフォント */ }
