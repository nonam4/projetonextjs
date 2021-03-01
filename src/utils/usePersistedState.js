import { useState, useEffect } from 'react'

function usePersistedState(key, initialState) {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        let storageValue = localStorage.getItem(key)
        if(storageValue !== null || storageValue !== 'null' || storageValue !== undefined || storageValue !== 'undefined') {
            setState(JSON.parse(storageValue))
        } else {
            setState(null)
        } 
    }, [])

    useEffect(() => {
        if(state !== null || state !== 'null' || state !== undefined || state !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(state))
        } else {
            localStorage.removeItem(key)
        }
    }, [key, state])

    return [state, setState]
}

export default usePersistedState