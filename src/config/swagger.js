module.exports = {
  swagger: '2.0',
  info: {
    description:
      'The application is a simple repository for managing tools with their respective names, links, descriptions and tags.',
    version: '1.0.0',
    title: 'Very Useful Tools to Remember',
    contact: {
      email: 'hygor.christian@gmail.com'
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  host: 'http://localhost:3000',
  basePath: '',
  tags: [
    {
      name: 'tool',
      description: 'Operations about tools'
    }
  ],
  schemes: ['https', 'http'],
  paths: {
    '/tools': {
      get: {
        tags: ['tool'],
        summary: 'Get all tools with pagination',
        operationId: 'getTools',
        produces: ['application/json'],
        parameters: [
          {
            name: 'tag',
            in: 'query',
            description: 'Find all tools with the given tag name',
            required: false
          },
          {
            name: 'page',
            in: 'query',
            description: 'Return the given page',
            required: false
          }
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/ToolsResponsePaginated'
            }
          }
        }
      },
      post: {
        tags: ['tool'],
        summary: 'Add a new tool',
        operationId: 'addTool',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Tool object that needs to be added',
            required: true,
            schema: {
              $ref: '#/definitions/ToolPost'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Successful operation'
          },
          '405': {
            description: 'Invalid input'
          }
        }
      }
    },
    '/tools/{_id}': {
      get: {
        tags: ['tool'],
        summary: 'Find tool by ID',
        description: 'Returns a single tool',
        operationId: 'getToolById',
        produces: ['application/json'],
        parameters: [
          {
            name: '_id',
            in: 'path',
            description: 'ID of tool to return',
            required: true,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Tool'
            }
          },
          '404': {
            description: 'Tool not found'
          }
        }
      },
      put: {
        tags: ['tool'],
        summary: 'Updates a tool',
        operationId: 'updateTool',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: '_id',
            in: 'path',
            description: 'ID of tool that needs to be updated',
            required: true,
            type: 'string'
          }
        ],
        responses: {
          '405': {
            description: 'Invalid input'
          }
        }
      },
      delete: {
        tags: ['tool'],
        summary: 'Deletes a tool',
        operationId: 'deleteTool',
        produces: ['application/json'],
        parameters: [
          {
            name: 'api_key',
            in: 'header',
            required: false,
            type: 'string'
          },
          {
            name: '_id',
            in: 'path',
            description: 'Tool id to delete',
            required: true,
            type: 'integer',
            format: 'int64'
          }
        ],
        responses: {
          '404': {
            description: 'Tool not found'
          }
        }
      }
    }
  },
  definitions: {
    Tool: {
      type: 'object',
      required: ['description', 'link', 'tags', 'title'],
      properties: {
        _id: {
          type: 'integer',
          format: 'string'
        },
        title: {
          type: 'string',
          example: 'json-server'
        },
        link: {
          type: 'string',
          example: 'https://github.com/typicode/json-server'
        },
        description: {
          type: 'string',
          example: 'Fake REST API based on a json schema.'
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        __v: {
          type: 'integer',
          example: 0
        }
      }
    },
    ToolPost: {
      type: 'object',
      required: ['description', 'link', 'tags', 'title'],
      properties: {
        title: {
          type: 'string',
          example: 'json-server'
        },
        link: {
          type: 'string',
          example: 'https://github.com/typicode/json-server'
        },
        description: {
          type: 'string',
          example: 'Fake REST API based on a json schema.'
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      }
    },
    ToolsResponsePaginated: {
      type: 'object',
      properties: {
        docs: {
          type: 'array',
          items: {
            $ref: '#/definitions/Tool'
          }
        },
        total: {
          type: 'integer',
          example: 1
        },
        limit: {
          type: 'integer',
          example: 20
        },
        page: {
          type: 'integer',
          example: '1,'
        },
        pages: {
          type: 'integer',
          example: 1
        }
      }
    }
  }
}
