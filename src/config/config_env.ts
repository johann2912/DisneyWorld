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
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD,
        }
    },
    jwt: {
        accessKey: process.env.JWT_ACCESS_KEY,
        refreshKey: process.env.JWT_REFRESH_KEY,
    }
}

export default config;