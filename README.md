# cart-demo (uses flaky-test)

A tiny shopping-cart project with automated tests. After every test run, the [flaky-test](https://www.npmjs.com/package/flaky-test) package reads the saved Playwright report and lists the tests that only passed on a retry.

## Run it

    npm install
    npm run check

`npm run check` does two things:

1. `npm test` runs the Playwright tests and saves the report to `reports/latest.json`.
2. `npm run flaky` runs `flaky-tests reports/latest.json` to show which tests were flaky.

## What you should see

`pays for an order` is listed under "Passed after retry". Playwright shows the run as green, but the test failed once first. `flaky-test` makes that visible.

## Note

The flakiness is simulated so the demo is repeatable. The payment gateway "times out" on the first attempt only (see `tests/checkout.spec.js`).

Package: https://www.npmjs.com/package/flaky-test
Source: https://github.com/J-Hub-01/flaky-tests
