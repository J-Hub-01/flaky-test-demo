const { test, expect } = require('@playwright/test');
const { Cart } = require('../src/cart');
const { charge } = require('../src/payments');

test('pays for an order', async ({}, testInfo) => {
  const cart = new Cart();
  cart.add('Notebook', 10, 2);

  // Simulated network blip: the gateway times out on the first attempt only,
  // so this test fails once and then passes on the retry (a "flaky" test).
  const gatewayUp = testInfo.retry > 0;

  const receipt = await charge(cart.total(), { gatewayUp });
  expect(receipt.status).toBe('paid');
});
