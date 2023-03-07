import { MenuItemStyle } from "./menu-item-style";

export type CustomItem = {
  key: string;
  label: string;
  route: string;
  style: MenuItemStyle;
  children: CustomItem[];
};
