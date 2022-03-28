import { Dashboard } from "./Dashboard"
import { Header } from "./Header"
import { Left } from "./LeftNavbar"
import { Right } from "./RightNavbar"



export const HomeDashboard = () => {
    return (
        <div>
            <Header />
            <Left />
            <Right />
            <Dashboard />
        </div>
    )

}