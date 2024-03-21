import { withDesign } from "storybook-addon-designs";

export default {
    title: "My stories",
    component: Button,
    decorators: [withDesign]
  };
  
  export const myStory = {
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
      },
    },
  };

  export const globalDecorators = [
    withDesign,
  ]