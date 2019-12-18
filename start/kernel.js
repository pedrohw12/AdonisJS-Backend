'use strict'

/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server')

const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'App/Middleware/ConvertEmptyStringsToNull'
]

const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  guest: 'Adonis/Middleware/AllowGuestOnly',
  team: 'App/Middleware/Team',
  is: 'Adonis/Acl/Is',
  can: 'Adonis/Acl/Can',
}

const serverMiddleware = [
  // 'Adonis/Middleware/Static',
  'Adonis/Middleware/Cors'
]

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware)
