import express from 'express';
import Consola from 'consola';

const app = express();

app.get('/', (request, response) =>
  response.json({
    message: '👋 Hello, World!',
  }),
);

app.listen(3333, () => {
  Consola.success('Server is running on port 3333! 🚀');
});
