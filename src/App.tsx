import "./App.css";
import { List } from "./components/List";
import { RegisterUser } from "./components/RegisterUser";
import { UserProvider } from "./contexts/UserContext";

export const App = () => {
  return (
    <div className="App">
 
      <UserProvider>
        <List />
        <RegisterUser />
      </UserProvider>
    </div>
  );
};
