import Head from 'next/head'
import axios from 'axios'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu'

function Index({toggleTheme}) {
    return(
        <>
            <Head>
                <title>Mundo Eletrônico</title>
                <link rel="icon" href="/icon.png" />
                <meta name='theme-color' content='#121e32'></meta>
            </Head>
            <Header toggleTheme={toggleTheme}/>
            <SideMenu />
        </>
    )
}

export default Index