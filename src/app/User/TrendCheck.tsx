import { JSX } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"
import BackButton from "../../conponents/BackButton"


const handleBack = (): void => {
    //Category Save
    router.back()
}

const TrenndCheck = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>TrendCheck</Header>
            <BackButton backVisible={true} onPress={handleBack}></BackButton>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }

})

export default TrenndCheck
