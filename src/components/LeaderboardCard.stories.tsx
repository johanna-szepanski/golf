import type { Meta, StoryObj } from '@storybook/react-vite'
import { LeaderboardCard } from './LeaderboardCard'

const meta: Meta<typeof LeaderboardCard> = {
  title: 'Golf/LeaderboardCard',
  component: LeaderboardCard,
  args: {
    player: {
      id: '1',
      name: 'Jordan Rose',
      score: -7,
    },
  },
}

export default meta

type Story = StoryObj<typeof LeaderboardCard>

export const Default: Story = {}
