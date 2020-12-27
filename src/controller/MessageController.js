const connection = require('../database/connection');

module.exports = {
  
     
    async index(req, res){ 
        const messages = await connection('message')
          .select()
          .orderBy('data','hora','asc');
        res.json({messages})
    },

    async findMessages(req, res){
      const {autor} =  req.body;
      
      const message= await connection('message')
        .select()
        .where('autor',autor)
        .orderBy('data','hora','asc');
      res.json({message});
    },

    async create(req, res){

        const {conteudo, autor} = req.body;
        //Usar para passar na mensagem
        const dia = new Date().getDate();
        const mes = new Date().getMonth()+1;
        const ano = new Date().getFullYear();
        const horas = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();

        const data = ano+"-"+mes+"-"+dia;
        const hora = horas+":"+min+":"+sec

        const result = await connection('message').insert({
            conteudo,
            autor,
            data,
            hora
          }).then(message => {

            return  res.status(200).json({success:'success'});

          }).catch(err =>{
            return  res.status(404).json({err:err});
          });

    }

}