import { View, Text, StyleSheet, ScrollView } from "react-native"
import { JSX } from "react"
import { useLocalSearchParams, Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import ColList from "../../conponents/ColList"
import DataRowList from "../../conponents/DataRowList"
import BackButton from "../../conponents/BackButton"
import EditButton from "../../conponents/EditButton"

const handlePress = (): void => {
    //New Data Input
    router.push("/User/NewData")
}
const handleEdit = (): void => {
    //Category Save
    router.push("/User/EditCategory")
}
const handleNewCategory = (): void => {
    //Category Save
    router.push("/User/NewCategory")
}

const UserDtail = (): JSX.Element => {
    const { userName } = useLocalSearchParams()
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>{userName} Detail</Header>
            <Link href="/User/UserList" asChild>
                <BackButton backVisible={true}></BackButton>
            </Link>
            <EditButton editVisible={true} onPress={handleEdit}></EditButton>

            <ScrollView horizontal style={styles.horizontalScroll}>
                <View>
                    {/* colList */}
                    <ColList
                        income1={"SBI銀行"}
                        income2={"楽天銀行"}
                        expense1={"JALカード"}
                        expense2={"その他現金"}
                        expense3={"共通口座振込"}>
                    </ColList>

                    {/* DatarowScroll */}
                    <ScrollView style={styles.dataRowScroll}>
                        {/* DatarowList */}
                        <DataRowList
                            year={2025}
                            month={12}
                            sum={38307}
                            income1={194129}
                            income2={20000}
                            expense1={-55192}
                            expense2={-0}
                            expense3={-120000}>
                        </DataRowList>
                        <DataRowList></DataRowList>
                        <DataRowList></DataRowList>
                        <DataRowList></DataRowList>
                        <DataRowList></DataRowList>
                        <DataRowList></DataRowList>
                        <DataRowList></DataRowList>
                        <DataRowList></DataRowList>
                        <View style={styles.scrollMargin}></View>
                    </ScrollView>
                </View>
            </ScrollView>
            {/* rotate={true}なら45度回転 */}
            <AddButton rotate={true}>+</AddButton>

            {/* visible={true}なら表示 */}
            <NewUserButton visible={true} onPress={handleNewCategory}>New Category</NewUserButton>
            <FooterButton onPress={handlePress}>New Data</FooterButton>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    scrollMargin: {
        height: 200
    },
    dataRowScroll: {
        paddingTop: 1
    },

})

export default UserDtail
