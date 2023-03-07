import { SubMenu, MenuItem } from "react-pro-sidebar";
import { CustomItem } from "../types/custom-item";
// import { Link } from "react-router-dom";
// import { Icon } from "semantic-ui-react";

export const CustomMenuItem = (props: { item: CustomItem }) => {
  if (props.item.children.length > 0) {
    return (
      <>
        <SubMenu
          label={props.item.label}
          // icon={<Icon name={props.item.style.icon} />}
        >
          {props.item.children.map((child: CustomItem, index: number) => {
            return (
              <CustomMenuItem key={`${child.label}-${index}`} item={child} />
            );
          })}
        </SubMenu>
      </>
    );
  }
  return (
    <MenuItem
    // icon={<Icon name={props.item.style.icon} />}
    // component={<Link to={props.item.route} />}
    >
      {props.item.label}
    </MenuItem>
  );
};
