import { DB } from './env'
import path from 'path';

const knexConfig = {
    development: {
        client: 'pg',
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
        },
        ssl: { rejectUnauthorized: false }
    },
    staging: {
        client: 'pg',
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
        client: 'pg',
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
