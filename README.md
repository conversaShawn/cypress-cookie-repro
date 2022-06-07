# cypress-cookie-repro

Reproduction of a test failure experienced in Cypress >= 7 that does not occur in 6.

To reproduce:

1. `pnpm i; pnpm test` -- in the cypress UI, run the sole test (`login.spec.ts`). The tests will pass.
2. Change the cypress version in `tests/package.json` to `"7^"`
3. `pnpm i; pnpm test`. Run `login.spec.ts` again -- the tests will fail when, after making a successful `POST` to `/login`, the page reloads to show the user still logged out.

The failure does not reproduce without the `Secure` option set in the `set-cookie` header -- remove that, and it passes in 7.
