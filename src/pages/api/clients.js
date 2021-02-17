import database from './_database.js'

export default async (req, res) => {

    await database.collection('/clients/').get().then(col => {
        let clients = {}
        col.forEach(doc => {
            clients[doc.id] = doc.data()
        })
        //define que os dados ficarão em cache por no minimo 60 segundos, depois revalida tudo novamente
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidade')
        res.status(200).send(clients)
    })
}

/*
    const clientes = [
        {
            id: '0000000000000',
            nomefantasia: 'Mundo Eletrônico',
            razaosocial: 'Mundo Eletrônico Locadora de Equipamentos LTDA',
            suspenso: false,
            endereco: {
                rua: 'Rua João Januário Ayroso',
                numero: '1825',
                complemento: 'Sala 1',
                bairro: 'Jaraguá Esquerdo',
                cidade: 'Jaraguá do Sul',
                estado: 'SC',
                cep: '89253-295'
            },
            sistema: {
                local: 'cGMgZGEgbG9jYefjbw==',
                versao: '0.3.2'
            },
            franquia: {
                tipo: 'maquina',
                //ValorPorExcedente
                vpe: 0,
                limite: 0
            },
            //esse resumo será o geral que aparece na listagem de clientes
            resumo: {
                '2021.02': {
                    impressoes: 13000,
                    excedentes: 10000,
                    atraso: false,
                    abastecimento: false
                }
            },
            impressoras: [
                {
                    modelo: 'Impressora de Teste',
                    serial: 'ABC123',
                    ip: '192.168.2.249',
                    setor: 'Recepção',
                    contabilizar: true,
                    franquia: {
                        limite: 3000,
                        //ValorPorExcedente
                        vpe: 0.06
                    },
                    tintas: {
                        capacidade: 20000,
                        //contador de quando foi abastecido a ultima vez
                        abastecido: 0
                    },
                    //contador atual da impressora
                    contador: 13000,
                    contadores: {
                        '2021.02': {
                            impresso: 13000,
                            excedente: 10000,
                            primeiro: {
                                contador: 0,
                                dia: 1
                            },
                            ultimo: {
                                contador: 13000,
                                dia: 31
                            }
                        }
                    }
                }
            ]
        }
    ]
    export default (req, res) => {
        //define que os dados ficarão em cache por no minimo 60 segundos, depois revalida tudo novamente
        setTimeout(() => {
            res.status(200).send(clientes)
        }, 1000)
    }
*/