import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta : Meta<typeof Button> = { 
    title:'Buttons/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
      },
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
      tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Button>;

    export const Primary: Story = {
        args: {
        label:'Primary',
        mode: 'primary',
        onClick: ()=> alert('Hola'),
        size:'medium'
        },
    };

  export const Secondary: Story = {
    args: {
      label:'Secondary',
      mode: 'secondary',
      onClick: ()=> alert('Hola'),
      size:'medium'
    },
  };

  export const Tertiary: Story = {
    args: {
      label:'Tertiary',
      mode: 'tertiary',
      onClick: ()=> alert('Hola'),
      size:'medium'
    },
  };

  export const Success: Story = {
    args: {
      label:'Success',
      mode: 'success',
      onClick: ()=> alert('Hola'),
      size:'medium'
    },
  };

  export const Error: Story = {
    args: {
      label:'Error',
      mode: 'error',
      onClick: ()=> alert('Hola'),
      size:'medium'
    },
  };