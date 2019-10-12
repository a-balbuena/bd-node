const {knex}=require('./knex')

function estados(){
    return new Promise((resolve, reject) => {
         let query = knex
             .select(knex.raw('entidad,nombre'))
             .from('estados')
             .limit(2)

         query.then(function(dato){
             resolve(dato)
         })    
    })
}

module.exports={
    estados
}