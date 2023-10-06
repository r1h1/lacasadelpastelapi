//SE EXPORTA EL PUERTO Y LOS DATOS DE CONEXIÓN
module.exports = {
    app: {
        port: process.env.port || 3000,
    },
    jwt: {
        secret: process.env.jet_secret || '7l;=e?H~*K(^XiR',
    },
    mysql: {
        host: process.env.mysql_host || 'containers-us-west-53.railway.app',
        user: process.env.mysql_user || 'root',
        password: process.env.mysql_password || 'gIl8DVcRfYNRKdxnXRty',
        database: process.env.mysql_db || 'railway',
        port: process.env.mysql_port || 7959
    }
}