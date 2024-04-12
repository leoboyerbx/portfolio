export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/trigger',
    handler: 'trigger.index',
    config: {
      policies: [],
      auth: false,
    },
  }
];
