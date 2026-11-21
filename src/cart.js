class Cart {
  constructor() {
    this.items = [];
    this.coupon = null;
  }

  add(name, price, quantity = 1) {
    const existing = this.items.find((item) => item.name === name);
    if (existing) existing.quantity += quantity;
    else this.items.push({ name, price, quantity });
  }

  remove(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  subtotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    if (code === 'SAVE10') this.coupon = { code, percentOff: 10 };
    else throw new Error('Unknown coupon: ' + code);
  }

  total() {
    const discount = this.coupon ? this.subtotal() * (this.coupon.percentOff / 100) : 0;
    return Math.round((this.subtotal() - discount) * 100) / 100;
  }
}

module.exports = { Cart };
