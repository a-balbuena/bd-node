const {estados}= require('./lib/consulta.js')

estados()
.then(result=>{
    console.log('resultado de estados')
    console.log(result)
})