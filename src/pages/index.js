import Head from 'next/head'
import axios from 'axios'

import Header from '../components/Header'

function Index({toggleTheme}) {
    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header toggleTheme={toggleTheme}/>
        </>
    )
}

export default Index