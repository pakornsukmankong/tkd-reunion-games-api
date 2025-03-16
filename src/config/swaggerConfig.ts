import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TKD-REUNION_API',
      version: '1.0.0',
      description: 'API Documentation for TKD-REUNION_API',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./src/swagger/*'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
