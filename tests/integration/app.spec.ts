import { expect, test } from '@playwright/test'

test('renders players from mocked API handlers', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Golf Leaderboard')).toBeVisible()
  await expect(page.getByText('Jordan Rose')).toBeVisible()
  await expect(page.getByText('Avery Woods')).toBeVisible()
  await expect(page.getByText('Riley Carter')).toBeVisible()
})
