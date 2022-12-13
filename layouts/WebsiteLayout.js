import Navbar from "../components/Navbar"

function WebsiteLayout(props) {
    return (
        <>
            <Navbar/>
            {props.children}
          
        </>
    )
}
export default WebsiteLayout