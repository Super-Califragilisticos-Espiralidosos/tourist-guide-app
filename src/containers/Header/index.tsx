import React from "react";
import NavigationBar from "../../components/Navbar"; 

/**
 * Header Container
 * @extends {Component<Props>}
 */
class Header extends React.Component {
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <NavigationBar/>
        )
    }
}
 
export default Header;