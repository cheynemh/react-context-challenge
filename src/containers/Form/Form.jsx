import styles from "./Form.module.scss";
import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";

const Form = () => {
    const { theme } = useContext(ToggleContext);
    console.log("daytime =", theme);

    const cl_ass = theme ? styles.day : styles.night;

    return (
        <div className={cl_ass}>
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
            <button>submit</button>
        </div>
    );
};

export default Form;
