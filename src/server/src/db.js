import MySql from 'mysql'

const Connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat_app'
})

export default Connection
