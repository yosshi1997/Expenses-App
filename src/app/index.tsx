import { Redirect } from "expo-router"
import { JSX } from "react"

const index = (): JSX.Element => {
    return <Redirect href="User/NewUser" />
}

export default index


{/* フォント編集
    [UserList]
    headerTitle
    userName
    newUserButtonText
    footerButtonText

    [UserDetail]
    dataText
*/ }
