import database from './_database.js'

export default async (req, res) => {

    await database.collection('/products/').get().then(col => {
        let products = []
        col.forEach(doc => {
            products.push({id: doc.id, ...doc.data()})
        })
        //define que os dados ficarão em cache por no minimo 60 segundos, depois revalida tudo novamente
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidade')
        res.status(200).send(products)
    })
}