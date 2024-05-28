//rejimo6551@acuxi.com
//$$$Blade26gt
/*
Server: sql5.freemysqlhosting.net
Name: sql5709995
Username: sql5709995
Password: xdU4z3vF9b
Port number: 3306
*/

module.exports = {
    app: {
        port: process.env.port || 3000,
    },
    jwt: {
        secret: process.env.jet_secret || '7l;=e?H~*K(^XiR',
    },
    mysql: {
        host: process.env.mysql_host || 'sql5.freemysqlhosting.net',
        user: process.env.mysql_user || 'sql5709995',
        password: process.env.mysql_password || 'xdU4z3vF9b',
        database: process.env.mysql_db || 'sql5709995',
    }
}