import React from "react";

import { NavigationBar } from "./../components/NavigationBar";

export default {
  title: "Example/Navigation Bar",
  component: NavigationBar,
  tags: ["autodocs"],
};

const Template = (args) => <NavigationBar {...args}>Content</NavigationBar>;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button Primary",
};
