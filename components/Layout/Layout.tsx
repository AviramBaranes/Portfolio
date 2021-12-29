import { NextComponentType } from "next";

interface LayoutPropsTypes{}

const Layout: NextComponentType<LayoutPropsTypes> = ({children}) =>{
    return <>{children}</>
}

export default Layout;