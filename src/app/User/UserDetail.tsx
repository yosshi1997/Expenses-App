import { View, Text, StyleSheet } from "react-native"
import { JSX } from "react"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"

const UserDtail = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} logoutVisible={true} backVisible={true} editVisible={true}>Yoshimasa</Header>

            {/* colList */}
            <View style={styles.colList}>
                <View style={styles.yearCol}>
                    <Text style={styles.colText}>Y</Text>
                </View>
                <View style={styles.monthCol}>
                    <Text style={styles.colText}>M</Text>
                </View>
                <View style={styles.sumCol}>
                    <Text style={styles.colText}>収支</Text>
                </View>
                <View style={styles.incomeCol}>
                    <Text style={styles.colText}>SBI銀行</Text>
                </View>
                <View style={styles.incomeCol}>
                    <Text style={styles.colText}>楽天銀行</Text>
                </View>
                <View style={styles.expenseCol}>
                    <Text style={styles.colText}>JALカード</Text>
                </View>
                <View style={styles.expenseCol}>
                    <Text style={styles.colText}>その他現金</Text>
                </View>
                <View style={styles.expenseCol}>
                    <Text style={styles.colText}>共通口座振込</Text>
                </View>

            </View>

            {/* DatarowScroll */}
            <View style={styles.dataRowScroll}>
                {/* Datarow */}
                <View style={[styles.dataRowList]}>
                    <View style={[styles.yearCol, styles.dataRow]}>
                        <Text style={styles.dataText}>2025</Text>
                    </View>
                    <View style={[styles.monthCol, styles.dataRow]}>
                        <Text style={styles.dataText}>12</Text>
                    </View>
                    <View style={[styles.sumCol, styles.dataRow]}>
                        <Text style={styles.dataText}>38307</Text>
                    </View>
                    <View style={[styles.incomeCol, styles.dataRow]}>
                        <Text style={styles.dataText}>194129</Text>
                    </View>
                    <View style={[styles.incomeCol, styles.dataRow]}>
                        <Text style={styles.dataText}>20000</Text>
                    </View>
                    <View style={[styles.expenseCol, styles.dataRow]}>
                        <Text style={styles.dataText}>-55192</Text>
                    </View>
                    <View style={[styles.expenseCol, styles.dataRow]}>
                        <Text style={styles.dataText}>-0</Text>
                    </View>
                    <View style={[styles.expenseCol, styles.dataRow]}>
                        <Text style={styles.dataText}>-120000</Text>
                    </View>
                </View>
            </View>



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
    colList: {
        flexDirection: "row",
        height: 24,
        width: "100%",
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: "rgb(255,255,255)",
        justifyContent: "center",
        alignItems: "center"
    },
    colText: {
        fontSize: 10,
        height: 16,
        paddingTop: 3,
        paddingBottom: 3
    },
    yearCol: {
        width: 32,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    monthCol: {
        width: 16,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    sumCol: {
        width: 64,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    incomeCol: {
        width: 64,
        alignItems: "center",
        backgroundColor: "rgba(0,0,255,0.25)",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    expenseCol: {
        width: 64,
        alignItems: "center",
        backgroundColor: "rgba(255,0,0,0.25)",
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    dataRowList: {
        flexDirection: "row",
        height: 24,
        width: "100%",
        backgroundColor: "rgb(255,255,255)",
        justifyContent: "center",
        alignItems: "center"
    },
    dataRow: {
        backgroundColor: "rgba(255,255,255,1)",
    },
    dataText: {
        fontSize: 8,
        height: 24,
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: "bold"
    },
})

export default UserDtail
