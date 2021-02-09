import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ToggleButton, ToggleButtonProps } from "../../index";
import markdown from "./ToggleButton.md";

export default ({
  title: "SkoreUI/ToggleButton",
  component: ToggleButton,
  argTypes: {
    active: {
      control: "boolean",
    },
    colorVariation: {
      control: {
        type: "inline-radio",
        options: [
          "#26E1CD",
          "#FD4274",
          "#FECF5C",
          "#FDAFBB",
          "#B6B0FC",
          "#7DDFC3",
        ],
      },
    },
    label: "Toggle Button",
    onClick: { action: "clicked" },
    onMouseOver: { action: "hover" },
  },
  parameters: {
    notes: { markdown },
    backgrounds: {
      default: "Dark",
    },
  },
} as unknown) as Meta;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  active: true,
  colorVariation: "#26E1CD",
  label: "Selected",
};

export const Deselected = Template.bind({});
Deselected.args = {
  active: false,
  colorVariation: "#26E1CD",
  label: "Deselected",
};
