import database from './_database.js'

export default async (req, res) => {

    const {data, listando} = JSON.parse(req.query.filters)

    let clientes = {}
    let dados = await database.collection('/clients/').get()
    dados.forEach(dado => {

        let cliente = dado.data()
        
        if(!cliente.ativo) return

        cliente.id = dado.id
        cliente.impresso = 0
        cliente.excedentes = 0
        cliente.atraso = false
        cliente.abastecimento = false

        let impressoras = cliente.impressoras
        for(let serial in impressoras) {

            let impressora = impressoras[serial]

            if(!impressora.contabilizar || impressora.substituida) break
            if((impressora.contador - impressora.tintas.abastecido) >= impressora.tintas.capacidade) cliente.abastecimento = true
            if(!impressora.contadores[data]) cliente.atraso = true
            if(!impressora.contadores[data]) break

            if(impressora.substituindo.length > 0) { //essa impressora está substituindo alguma outra?
                
                let impresso = 0
                let excedentes = 0
                for(let serialSubstituido in impressora.substituindo) {

                    let impressoraSubstituida = cliente.impressoras[serialSubstituido]
                    if(!impressoraSubstituida.contadores[data]) break //se a impressora substituida não tiver leitura ela será ignorada
                    impresso += impressoraSubstituida.contadores[data].impresso
                }

                //após definir os valores impressos das trocas, adicionamos os valores da impressora atual também
                impresso += impressora.contadores[data].impresso
                //definimos se tem excedentes com base na franquia atual comparado ao total impresso das trocas + impresso atual
                if(impresso > impressora.franquia.limite) excedentes = impresso - impressora.franquia.limite
                //incrementa o total impresso do cliente
                cliente.impresso += impresso

                switch(cliente.franquia.tipo) {
                    case 'maquina':
                        cliente.excedentes += excedente
                        break
                    case 'pagina':
                        if(cliente.impresso > cliente.franquia.limite) cliente.excedentes = cliente.impresso - cliente.franquia.limite
                        break
                    case 'ilimitado':
                        cliente.excedentes += impresso
                        break
                }
            } else { //não está substituindo nenhuma impressora
                
                cliente.impresso += impressora.contadores[data].impresso
                switch(cliente.franquia.tipo) {
                    case 'maquina':
                        cliente.excedentes += impressora.contadores[data].excedente
                        break
                    case 'pagina':
                        if(cliente.impresso > cliente.franquia.limite) cliente.excedentes = cliente.impresso - cliente.franquia.limite
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
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidade')
    res.status(200).send(clientes)
}