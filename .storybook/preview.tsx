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
        ...Object.entries(colors)
          .map(([key, value]) => {
            return Object.entries(value).map(([shade, color]) => ({
              name: `${key}-${shade}`,
              value: color,
            }));
          })
          .flat(),
      ],
      default: "neutral-100",
      enabled: true,
    },
  },
};

export default preview;
