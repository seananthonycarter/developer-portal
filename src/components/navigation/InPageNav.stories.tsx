// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import InPageNav from './InPageNav';

const meta: Meta<typeof InPageNav> = {
  title: 'Components/Navigation/InPageNav',
  component: InPageNav,
};
export default meta;

type Story = StoryObj<typeof InPageNav>;

export const Basic: Story = {
  args: {
    titles: [
      {
        title: 'Title 1',
        id: 'title-1',
      },
      {
        title: 'Title 2',
        id: 'title-2',
      },
      {
        title: 'Title 3',
        id: 'title-3',
      },
    ],
  },
};
