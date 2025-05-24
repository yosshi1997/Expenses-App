import { View, Text, StyleSheet } from "react-native"

interface Props {
    year: number;
    month: number;
    sum: number;
    income1: number;
    income2: number;
    expense1: number;
    expense2: number;
    expense3: number;
}
const ColList = ({ year, month, sum, income1, income2, expense1, expense2, expense3 }: Props): JSX.Element => {
    return (
        <View style={[styles.dataRowList]}>
            <View style={styles.dataYearCol}>
                <Text style={styles.dataText}>{year}</Text>
            </View>
            <View style={styles.dataMonthCol}>
                <Text style={styles.dataText}>{month}</Text>
            </View>
            <View style={styles.dataSumCol}>
                <Text style={styles.dataText}>{sum}</Text>
            </View>
            <View style={styles.dataIncomeCol}>
                <Text style={styles.dataText}>{income1}</Text>
            </View>
            <View style={styles.dataIncomeCol}>
                <Text style={styles.dataText}>{income2}</Text>
            </View>
            <View style={styles.dataExpenseCol}>
                <Text style={styles.dataText}>{expense1}</Text>
            </View>
            <View style={styles.dataExpenseCol}>
                <Text style={styles.dataText}>{expense2}</Text>
            </View>
            <View style={styles.dataExpenseCol}>
                <Text style={styles.dataText}>{expense3}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dataYearCol: {
        width: "8%",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    dataMonthCol: {
        width: "4%",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    dataSumCol: {
        width: "14%",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    dataIncomeCol: {
        width: "14%",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    dataExpenseCol: {
        width: "14%",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: 'rgba(0, 0, 0,0.5)'
    },
    dataRowList: {
        flexDirection: "row",
        height: 24,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    dataText: {
        fontSize: 8,
        height: 24,
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: "bold"
    },
})

export default ColList
