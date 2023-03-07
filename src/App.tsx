import { ProSidebarProvider } from "react-pro-sidebar";
import "./App.css";
import CustomMenu from "./menu/components/custom-menu";

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <CustomMenu />
      </ProSidebarProvider>
    </div>
  );
}

export default App;
