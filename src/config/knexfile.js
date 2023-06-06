import { DB } from './env'
import path from 'path';

const knexConfig = {
    development: {
        client: 'mysql',
        connection: {
            port: DB.port,
            host: DB.host,
            database: DB.name,
            user:     DB.username,
            password: DB.password
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations',
            directory: path.resolve(__dirname, '../migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, '../seeds')
        }
    },
    staging: {
        client: 'mysql',
        connection: {
            database: DB.name,
            user:     DB.username,
            password: DB.password
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: 'mysql',
        connection: {
            database: DB.name,
            user:     DB.username,
            password: DB.password
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    }
};

export default knexConfig
