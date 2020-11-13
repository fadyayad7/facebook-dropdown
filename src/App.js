import logo from "./logo.svg";
import "./App.css";

import { NavBar, NavItem, DropDownMenu } from "./components/NavBar";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropDownMenu />
        </NavItem>
      </NavBar>
    </div>
  );
}

export default App;
