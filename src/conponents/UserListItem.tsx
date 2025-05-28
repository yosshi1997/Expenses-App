import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
interface Props {
    children: string;
    updateTime: string;
}

const UserListItem = (props: Props): JSX.Element => {
    const { children, updateTime } = props
    return (
        <Link href="/User/UserDetail" asChild>
            <TouchableOpacity>
                {/* User List Item */}
                <View style={styles.userListItem} >
                    <View style={styles.userNameAndTime}>
                        <Text style={styles.userName}>{children}</Text>
                        <Text style={styles.updateTime}>{updateTime}</Text>
                    </View>
                    <TouchableOpacity style={styles.userListItemButton}>
                        <Text style={styles.userEditButton}>
                            <MaterialIcons name="edit" size={20} />
                        </Text>
                    </TouchableOpacity>
                </View >
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
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
        borderColor: 'transparent',
        color: "rgba(0, 0, 0,0.4)"
    }
})

export default UserListItem
