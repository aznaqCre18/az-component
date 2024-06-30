import React from "react";
import { Button } from "../components/Button";

// image
import homeButtonEx from "./../assets/home-btn-ex.svg";
import homeButtonExPurple from "./../assets/home-btn-ex-purple.svg";

export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

// Primary Button Stories

export const Primary = Template.bind({});
Primary.args = {
  label: "Button Primary",
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  label: "Button Primary Icon",
  icon: homeButtonEx,
};

// Secondary Button Stories

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button Secondary",
  type: "secondary",
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  label: "Button Secondary Icon",
  icon: homeButtonExPurple,
  type: "secondary",
};

// Dashed Button Stories

export const Dashed = Template.bind({});
Dashed.args = {
  label: "Dashed Button",
  type: "dashed",
};

export const DashedIcon = Template.bind({});
DashedIcon.args = {
  label: "Button Dashed Icon",
  icon: homeButtonExPurple,
  type: "dashed",
};

// Link Button Stories

export const Link = Template.bind({});
Link.args = {
  label: "Link Button",
  type: "link",
};
