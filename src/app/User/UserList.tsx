import { JSX, useEffect, useState } from "react"
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from "react-native"
import { router } from "expo-router"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { db, auth } from "../../config"

import Header from "../../conponents/Header"
import UserListItem from "../../conponents/UserListItem"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import LogoutButton from "../../conponents/LogoutButton"

interface User {
    id: string;
    userName: string;
    upDateTime: string;
}

const handlePress = (): void => {
    router.push("/User/TrendCheck")
}

const handleNewUser = (): void => {
    router.push("/User/NewUser")
}

const UserList = (): JSX.Element => {
    const [userList, setuserList] = useState<userList[]>([]);
    //画面が表示されたときにuserListを読み込み、
    useEffect(() => {
        if (auth.currentUser === null) { return }

        const ref = collection(db, `users/${auth.currentUser.uid}/userList`)
        const q = query(ref, orderBy("upDateTime", "desc"))

        const unSubscribe = onSnapshot(q, (snapshot) => {
            const fetchedUsers: userList[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                userName: doc.data().userName,
                upDateTime: doc.data().upDateTime.toDate().toLocaleString() ?? "更新日時なし",
            }));
            setuserList(fetchedUsers);
        })
        return unSubscribe
    }, [])


    return (
        <View style={styles.container}>
            <Header>Main Menu</Header>
            <LogoutButton logoutVisible={true} />

            <ScrollView style={styles.userListScroll}>
                {userList.map((userList) => (
                    <UserListItem
                        key={userList.id}
                        updateTime={userList.upDateTime}
                        onPress={() =>
                            router.push({
                                pathname: "/User/UserDetail",
                                params: { userName: userList.userName },
                            })
                        }
                    >
                        {userList.userName}
                    </UserListItem>
                ))}
                <View style={styles.scrollMargin} />
            </ScrollView>

            <AddButton rotate={true}>+</AddButton>
            <NewUserButton visible={true} onPress={handleNewUser}>
                New User
            </NewUserButton>
            <FooterButton onPress={handlePress}>Trend Check</FooterButton>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    userListScroll: {
        flexGrow: 1
    },
    scrollMargin: {
        height: 200
    }
})

export default UserList
