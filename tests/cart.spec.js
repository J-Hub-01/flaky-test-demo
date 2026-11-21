const { test, expect } = require('@playwright/test');
const { Cart } = require('../src/cart');

test('adds items and works out the subtotal', async () => {
  const cart = new Cart();
  cart.add('Notebook', 5, 2);
  cart.add('Pen', 1.5);
  expect(cart.subtotal()).toBe(11.5);
});

test('removes an item', async () => {
  const cart = new Cart();
  cart.add('Notebook', 5);
  cart.remove('Notebook');
  expect(cart.items).toHaveLength(0);
});

test('applies the SAVE10 coupon', async () => {
  const cart = new Cart();
  cart.add('Notebook', 10);
  cart.applyCoupon('SAVE10');
  expect(cart.total()).toBe(9);
});
