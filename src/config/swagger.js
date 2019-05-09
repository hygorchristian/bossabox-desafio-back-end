module.exports = {
  swagger: '2.0',
  info: {
    description:
      'A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.,\n',
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
  host: 'virtserver.swaggerhub.com',
  basePath: '/SmartSoft/VUTTR2/1.0.0',
  tags: [
    {
      name: 'tool',
      description: 'Operations about tools'
    },
    {
      name: 'user',
      description: 'Operations about user'
    },
    {
      name: 'login',
      description: 'Oprations about login'
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
            required: false,
            type: 'string'
          },
          {
            name: 'page',
            in: 'query',
            description: 'Return the given page',
            required: false,
            type: 'integer'
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
        summary: 'Create a new tool',
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
          '400': {
            description: 'Tool not found'
          }
        }
      }
    },
    '/users': {
      post: {
        tags: ['user'],
        summary: 'Create new user',
        operationId: 'createUser',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/User'
            }
          }
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserResponse'
            }
          },
          '404': {
            description: 'User not found'
          }
        }
      }
    },
    '/users/{_id}': {
      get: {
        tags: ['user'],
        summary: 'Find user by id',
        operationId: 'getUser',
        produces: ['application/json'],
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserResponse'
            }
          },
          '404': {
            description: 'User not found'
          }
        }
      },
      put: {
        tags: ['user'],
        summary: 'Update user by id',
        operationId: 'updateUser',
        produces: ['application/json'],
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            type: 'string'
          },
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/User'
            }
          }
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserResponse'
            }
          },
          '404': {
            description: 'User not found'
          }
        }
      }
    },
    '/login': {
      post: {
        tags: ['login'],
        summary: 'Checks if user exists and return a token (JWT)',
        operationId: 'login',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Form fields required',
            required: true,
            schema: {
              $ref: '#/definitions/LoginForm'
            }
          }
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/LoginResponse'
            }
          },
          '400': {
            description: 'Invalid password'
          },
          '404': {
            description: 'User with email not found'
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
    },
    User: {
      type: 'object',
      required: ['email', 'name', 'password'],
      properties: {
        name: {
          type: 'string',
          example: 'Joao Lemes'
        },
        email: {
          type: 'string',
          example: 'joao.lemes@mail.com'
        },
        password: {
          type: 'string',
          example: '123456'
        }
      }
    },
    UserResponse: {
      type: 'object',
      required: ['email', 'name'],
      properties: {
        _id: {
          type: 'string',
          example: '5cd455a33e10a90200857b73'
        },
        name: {
          type: 'string',
          example: 'Joao Lemes'
        },
        email: {
          type: 'string',
          example: 'joao.lemes@mail.com'
        },
        __v: {
          type: 'integer',
          example: 0
        }
      }
    },
    LoginResponse: {
      type: 'object',
      properties: {
        user: {
          $ref: '#/definitions/LoginResponse_user'
        },
        token: {
          type: 'string',
          example:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDMyZmY2Y2Q3OTNjMjRhOGQwZDFlZSIsImlhdCI6MTU1NzM0NjgxNCwiZXhwIjoxNTU3NDMzMjE0fQ.hehD_oyEbWOhPnCYAHiZw2Gy_ie0Q-P-_9Pwa4t2ZjY'
        }
      }
    },
    LoginForm: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'joao.lemes@mail.com'
        },
        senha: {
          type: 'string',
          example: '12345'
        }
      }
    },
    LoginResponse_user: {
      properties: {
        _id: {
          type: 'string',
          example: '5cd455a33e10a90200857b73'
        },
        name: {
          type: 'string',
          example: 'Joao Lemes'
        },
        email: {
          type: 'string',
          example: 'joao.lemes@mail.com'
        },
        __v: {
          type: 'integer',
          example: 0
        }
      }
    }
  }
}
