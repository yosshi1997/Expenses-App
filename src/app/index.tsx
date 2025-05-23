import { Redirect } from "expo-router"
import { JSX } from "react"

const index = (): JSX.Element => {
    return <Redirect href="User/UserDetail" />
}

export default index
