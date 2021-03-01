import database from './_database.js'
import bcrypt from 'bcrypt'

export default async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let usuario

    await database.collection('/users/').where('username', '==', username).get().then(col => {
        col.forEach(doc => {
            // Compara a senha em string com o Hash armazenado
            if(bcrypt.compareSync(password, doc.data().hash)) {
                usuario = { id: doc.id, ...doc.data() }
            }
        })
        // Checa se o usuário é valido
        usuario? res.status(200).send(usuario) : res.status(403).send('Shall not pass!')
    })
}