export type DeviceKind = 'phone' | 'tablet' | 'desktop'

export function getDeviceKind(width: number): DeviceKind {
  if (width >= 1024) {
    return 'desktop'
  }

  if (width >= 768) {
    return 'tablet'
  }

  return 'phone'
}
