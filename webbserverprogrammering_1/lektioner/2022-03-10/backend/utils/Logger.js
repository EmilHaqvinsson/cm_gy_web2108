import winston from 'winston'
import dotenv from 'dotenv'

dotenv.config()
const environment = process.env.NODE_ENV || development // default env is "development" (only if no NODE_ENV setting is in .env)

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
}
winston.addColors(colors)

const transports = [
    new winston.transports.Console(),
    ]

const format = winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
    winston.format.printf(
        () => {
            `${info.timestamp}${info.level}${info.mess}`
        }
    )    
)

const logger = winston.createLogger({
    level: 'info',
    levels,
    format: winston.format.json,
    transports
})

