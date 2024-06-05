import "../../App.css";
import ContactsList from "../ContactsList";
import CreateContact from "../CreateContact/CreateContact";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <ContactsList />
    </div>
  );
}

export default App;
