import { expect, test } from '@playwright/test'
import { getDeviceKind } from '../../src/lib/device'

test('classifies screen widths into phone, tablet, and desktop', () => {
  expect(getDeviceKind(390)).toBe('phone')
  expect(getDeviceKind(800)).toBe('tablet')
  expect(getDeviceKind(1366)).toBe('desktop')
})
