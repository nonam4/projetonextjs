import { useState, useEffect } from 'react'

function usePersistedState(key, initialState) {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        let storageValue = localStorage.getItem(key) || sessionStorage.getItem(key)
        if(storageValue !== null && storageValue !== 'null' && storageValue !== undefined && storageValue !== 'undefined') {
            setState(JSON.parse(storageValue))
        } else {
            setState(initialState)
        } 
    }, [])


    useEffect(() => {
        if(state !== null && state !== 'null' && state !== undefined && state !== 'undefined') {
            if(state.temporary) {
                sessionStorage.setItem(key, JSON.stringify(state))
            } else {
                localStorage.setItem(key, JSON.stringify(state))
            }
        } else {
            //se definir o item como nulo ou undefined irá limpar dos dois armazenamentos
            localStorage.removeItem(key)
            sessionStorage.removeItem(key)
        }
    }, [key, state])

    return [state, setState]
}

export default usePersistedState