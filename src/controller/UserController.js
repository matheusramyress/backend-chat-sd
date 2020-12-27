const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
  
     
    async index(req, res){ 

       const usuarios = await connection('usuario').select();
        res.json({usuarios})
    },

    async finByEmail(req, res){
      let {email} =  req.body;
      const usuario = await connection('usuario')
          .select()
          .where('email',email);

      res.json({usuario});
    },
   
    async finById(req, res){
      let {id} =  req.params;
      const usuario = await connection('usuario')
          .select()
          .where('id',id);

      res.json({usuario});
    },

    async create(req, res){
       
        let {nome, email, senha} = req.body;
        const hashedPassword = await bcrypt.hash(senha,10);
        senha = hashedPassword;

        const result = await connection('usuario').insert({
            nome,
            email,
            senha
          }).then(message => {

            return  res.status(200).json({success:'success'});

          }).catch(err =>{
            return  res.status(404).json({err:err});
          });

    }

}