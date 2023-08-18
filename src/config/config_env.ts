import 'dotenv/config'

const config = {
    project: {
        port: process.env.PORT
    },
    db: {
        mysql: {
            dialect: process.env.DATA_BASE_DIALECT,
            host: process.env.MYSQL_HOST,
            dbName: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            rootPassword: process.env.MYSQL_ROOT_PASSWORD,
        },
        redis: {
            password: process.env.REDIS_PASSWORD,
        }
    }
}

export default config;