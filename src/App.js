import "./App.module.scss";
import Form from "./containers/Form";
import Header from "./containers/Header";
import ToggleProvider from "./context/ToggleContext";

function App() {
    return (
        <ToggleProvider>
            <div>
                <Header />
                <Form />
            </div>
        </ToggleProvider>
    );
}

export default App;
