



let knex = require('knex')(
    {
        client: 'pg', connection: {
            host: 'localhost',
            user: 'postgres',
            port: '5432',
            password: 'postgres',
            database: 'postgis_sample'

          //  client: 'pg', connection: {
            //    host: 'postgressubsidios.cngznvjp2jol.us-west-2.rds.amazonaws.com',
              //  user: 'postgres',
                //port: '5432',
                //password: 'conabio2018',
                //database: 'postgres'
        }
    });

module.exports = {
    knex
}