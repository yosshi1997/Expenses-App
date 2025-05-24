import { View, Text, StyleSheet, ScrollView } from "react-native"
import { JSX } from "react"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import ColList from "../../conponents/ColList"
import DataRowList from "../../conponents/DataRowList"

const UserDtail = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} logoutVisible={true} backVisible={true} editVisible={true}>Yoshimasa</Header>

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
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <DataRowList></DataRowList>
                <View style={styles.scrollMargin}></View>
            </ScrollView>

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
    },
    scrollMargin: {
        height: 200
    },

})

export default UserDtail
