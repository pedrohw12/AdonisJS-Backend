'use strict'

const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/lucid-slugify/providers/SlugifyProvider',
  'adonis-kue/providers/KueProvider',
  '@adonisjs/redis/providers/RedisProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-acl/providers/AclProvider'
]

const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  'adonis-kue/providers/CommandsProvider',
  'adonis-acl/providers/CommandsProvider'
]

const aliases = {
  Role: 'Adonis/Acl/Role',
  Permission: 'Adonis/Acl/Permission'
}

const commands = []

const jobs = ['App/Jobs/InvitationEmail']

module.exports = { providers, aceProviders, aliases, commands, jobs }
