import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Disney world',
            version: '0.0.1',
            description: `The following API allows you to create 
                    Disney characters, find out in which movies 
                    they have appeared, and includes its own 
                    user authentication.`,
        },
    },
    apis: ['src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
