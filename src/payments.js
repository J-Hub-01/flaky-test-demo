// A fake payment gateway. In a real shop this would be a network call.
async function charge(amount, { gatewayUp }) {
  if (!gatewayUp) throw new Error('Payment gateway timed out');
  return { status: 'paid', amount };
}

module.exports = { charge };
