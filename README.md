# React Native Web + Vite Starter

Basic TypeScript setup for a React Native style app running in Vite, with:

- responsive layout (desktop, tablet, phone)
- MSW mock API handling
- Storybook visual component display
- Playwright unit and integration tests
- ESLint + Prettier

## Local development

```bash
yarn
yarn dev
```

Mock APIs are enabled in development by default via MSW. Disable them with:

```bash
VITE_USE_MOCKS=false yarn dev
```

## Scripts

- `yarn lint`
- `yarn format`
- `yarn build`
- `yarn storybook`
- `yarn test:unit`
- `yarn test:integration`
