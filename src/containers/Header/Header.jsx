import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";
import styles from "./Header.module.scss";

const Header = () => {
    const { theme, setTheme } = useContext(ToggleContext);
    const classes = theme ? styles.day : styles.night;
    const handleClick = () => {
        setTheme(!theme);
    };

    return (
        <div className={styles.Header}>
            <button className={classes} onClick={handleClick}>
                toggle theme
            </button>
        </div>
    );
};

export default Header;
