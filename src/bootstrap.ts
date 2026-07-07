async function enableMocks() {
  if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS !== 'false') {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}

export async function startApp(renderApp: () => void) {
  await enableMocks().catch((error) => {
    console.warn('MSW failed to start:', error)
  })

  renderApp()
}
