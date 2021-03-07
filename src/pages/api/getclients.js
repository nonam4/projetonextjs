import database from './_database.js'

export default async (req, res) => {

    let data = '2021.02'

    let clientes = {}
    let dados = await database.collection('/clients/').get()
    dados.forEach(dado => {

        let cliente = dado.data()
        cliente.id = dado.id
        cliente.impresso = 0
        cliente.excedentes = 0

        let impressoras = cliente.impressoras
        for(let serial in impressoras) {

            let impressora = impressoras[serial]
            if(impressora.contabilizar) {

                cliente.impresso += impressora.contadores[data].impresso
                switch(cliente.franquia.tipo) {
                    case 'maquina':
                        cliente.excedentes += impressora.contadores[data].excedente
                        break
                    case 'pagina':
                        cliente.excedentes = cliente.impresso > cliente.franquia.limite? cliente.impresso - cliente.franquia.limite : 0
                        break
                    case 'ilimitado':
                        cliente.excedentes += impressora.contadores[data].impresso
                        break
                }  
            }       
        }

        clientes[cliente.id] = cliente
    })
    //define que os dados ficarão em cache por no minimo 60 segundos, depois revalida tudo novamente
    //utilizado para desenvolvimento
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidade')
    res.status(200).send(clientes)
}