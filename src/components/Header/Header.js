import { Component } from "react";
import style from "./Header.module.css";
import NavigationItem from "../NavigationItem/NavigationItem.js";


class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className={style.navigation}>
                <ul>
                    <NavigationItem>Link One</NavigationItem>
                    <NavigationItem>Link Two</NavigationItem>
                    <NavigationItem>Link Three</NavigationItem>
                    <NavigationItem>Link Four</NavigationItem>
                    <NavigationItem>Link Five</NavigationItem>
                    <NavigationItem>Link Six</NavigationItem>
                    <NavigationItem>Link Seven</NavigationItem>
                    <NavigationItem>Link Eight</NavigationItem>
                </ul>
            </nav>
        )
    }
}

export default Header;