import { View, Text, StyleSheet, ScrollView } from "react-native"
import { JSX } from "react"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import FooterButton from "../../conponents/FooterButton"
import ColList from "../../conponents/ColList"
import ColListItem from "../../conponents/ColListItem"
import AddButton from "../../conponents/AddButton"
import SignUpButton from "../../conponents/SignUpButton"
import LogoutButton from "../../conponents/LogoutButton"
import BackButton from "../../conponents/BackButton"
import EditButton from "../../conponents/EditButton"

const handlePress = (): void => {
    //Category Save
    router.push("/User/UserDetail")
}

const UserDtail = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>Edit Category</Header>
            <SignUpButton signUpVisible={false}></SignUpButton>
            <LogoutButton logoutVisible={false}></LogoutButton>
            <BackButton backVisible={true}></BackButton>
            <EditButton editVisible={false}></EditButton>

            {/* colListReview */}
            <ScrollView horizontal style={styles.horizontalScroll}>
                <ColList
                    income1={"SBI銀行"}
                    income2={"楽天銀行"}
                    expense1={"JALカード"}
                    expense2={"その他現金"}
                    expense3={"共通口座振込"}
                />
            </ScrollView>

            {/* colListScroll */}
            <ScrollView style={styles.colListScroll}>
                {/* colListItem */}
                <ColListItem categoryName="SBI銀行" categoryType="Income" />
                <ColListItem categoryName="SBI銀行" categoryType="Income" />
                <ColListItem categoryName="SBI銀行" categoryType="Income" />
                <ColListItem categoryName="SBI銀行" categoryType="Income" />
                <ColListItem categoryName="SBI銀行" categoryType="Income" />
            </ScrollView>
            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={handlePress}>Save</FooterButton>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    horizontalScrollContent: {
        height: 24, // 内部コンテンツの高さも指定する
        alignItems: "center", // 中央揃え
    },
    colListScroll: {
        position: "absolute",
        width: "100%",
        height: "60%",
        top: "25%"
    },
    scrollContent: {
        width: "100%",

    },
    categoryList: {
        flexDirection: "row",
        width: "100%",
    },
    categoryName: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,1)',
        width: "40%",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryNameText: {
        fontSize: 16
    },
    categoryType: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,1)',
        width: "40%",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryTypeText: {
        fontSize: 16
    },
    sortIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        width: "20%",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    sortIconText: {
        fontSize: 16
    }
})

export default UserDtail
