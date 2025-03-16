import type { Preview } from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { colors } from "../theme/colors";

const preview: Preview = {
  decorators: [withBackgrounds],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        {
          name: "white",
          value: "#ffffff",
        },
        ...Object.entries(colors)
          .map(([key, value]) => {
            return Object.entries(value).map(([shade, color]) => ({
              name: `${key}-${shade}`,
              value: color,
            }));
          })
          .flat(),
      ],
      default: "white",
      enabled: true,
    },
  },
};

export default preview;
