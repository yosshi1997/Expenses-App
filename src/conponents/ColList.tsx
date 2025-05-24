import { View, Text, StyleSheet } from "react-native"

interface Props {
    income1: string;
    income2: string;
    expense1: string;
    expense2: string;
    expense3: string;
}
const ColList = ({ income1, income2, expense1, expense2, expense3 }: Props): JSX.Element => {
    return (
        <View style={styles.colList}>
            <View style={styles.horizontalScrollMargin}></View>
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
                <Text style={styles.colText}>{income1}</Text>
            </View>
            <View style={styles.incomeCol}>
                <Text style={styles.colText}>{income2}</Text>
            </View>
            <View style={styles.expenseCol}>
                <Text style={styles.colText}>{expense1}</Text>
            </View>
            <View style={styles.expenseCol}>
                <Text style={styles.colText}>{expense2}</Text>
            </View>
            <View style={styles.expenseCol}>
                <Text style={styles.colText}>{expense3}</Text>
            </View>
            <View style={styles.horizontalScrollMargin}></View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    horizontalScrollMargin: {
        width: 10
    }
})

export default ColList
