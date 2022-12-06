const option = {
    openapi: '3.0.0',
    info: {
        title: 'Patient API',
        description: 'Patient App API Documentation',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3500/',
            description: 'Development Server'
        },
        {
            url: 'https://patient-data.onrender.com/',
            description: 'Production Server'
        },
    ],
    tags: [
        {
            name: 'Patient',
            description: 'everything about patient'
        },
        {
            name: 'Patient Test',
            description: 'everything about patient test'
        },
    ],
    apis: ['../routes/*.js'],
};


module.exports = option;

//writing swagger config