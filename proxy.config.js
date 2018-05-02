const proxy = [
  {
    context: '/api',
    target: 'http://localhost:6336'
  }
];
module.exports = proxy;
