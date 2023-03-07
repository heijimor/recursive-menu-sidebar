import { Sidebar, Menu as MenuSidebar, useProSidebar } from "react-pro-sidebar";
import data from "../data/items.json";
import { CustomItem } from "../types/custom-item";
import { CustomMenuItem } from "./custom-menu-item";

const CustomMenu = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <>
      <button onClick={() => collapseSidebar()}>Collapse</button>
      <Sidebar defaultCollapsed={true}>
        <MenuSidebar>
          {data.map((item: CustomItem, index) => {
            return (
              <CustomMenuItem key={`${item.label}-${index}`} item={item} />
            );
          })}
        </MenuSidebar>
      </Sidebar>
    </>
  );
};

export default CustomMenu;
