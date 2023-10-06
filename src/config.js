//SE EXPORTA EL PUERTO Y LOS DATOS DE CONEXIÓN
module.exports = {
    app: {
        port: process.env.port || 3000,
    },
    jwt: {
        secret: process.env.jet_secret || '7l;=e?H~*K(^XiR',
    },
    mysql: {
        host: process.env.mysql_host || 'sql3.freemysqlhosting.net',
        user: process.env.mysql_user || 'sql3651515',
        password: process.env.mysql_password || 'CQcYZdhKMI',
        database: process.env.mysql_db || 'sql3651515',
    }
}