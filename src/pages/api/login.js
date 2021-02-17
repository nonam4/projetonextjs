import database from './_database.js'
import bcrypt from 'bcrypt'

export default async (req, res) => {
    let email = req.body.email
    let senha = req.body.senha
    let usuario

    await database.collection('/users/').where('email', '==', email).get().then(col => {
        col.forEach(doc => {
            // Compara a senha em string com o Hash armazenado
            if(bcrypt.compareSync(senha, doc.data().hash)) {
                usuario = {
                    id: doc.id,
                    ...doc.data()
                }
            }
        })
        // Checa se o usuário é valido
        usuario? res.status(200).send(usuario) : res.status(403).send('Shall not pass!')
    })
}