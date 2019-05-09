module.exports = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Very Useful Tools to Remember',
    description:
      'A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.',
    license: 'MIT',
    url: 'https://opensource.org/licenses/MIT'
  },
  host: process.env.HOST || 'localhost:3000',
  basePath: '',
  tags: [
    {
      name: 'Tools',
      description: 'skksk'
    }
  ],
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/tools': {
      get: {
        tags: ['Tools'],
        summary: 'Get all tools in system',
        response: {
          '200': {
            description: 'Ok',
            schema: '#/tools'
          }
        }
      },
      post: {
        tags: ['Tools'],
        summary: 'Get all tools in system',
        response: {
          '200': {
            description: 'Ok',
            schema: '#/tools'
          }
        }
      }
    },
    '/tools/:id': {
      get: {
        tags: ['Tools'],
        summary: 'Get all tools in system',
        response: {
          '200': {
            description: 'Ok',
            schema: '#/tools'
          }
        }
      },
      put: {
        tags: ['Tools'],
        summary: 'Get all tools in system',
        response: {
          '200': {
            description: 'Ok',
            schema: '#/tools'
          }
        }
      },
      delete: {
        tags: ['Tools'],
        summary: 'Get all tools in system',
        response: {
          '200': {
            description: 'Ok',
            schema: '#/tools'
          }
        }
      }
    }
  },
  definitions: {
    tool: {
      properties: {
        _id: {
          type: 'number'
        },
        title: {
          type: 'string'
        },
        link: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        tags: {
          type: 'array'
        }
      }
    }
  }
}
