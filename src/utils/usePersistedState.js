import { useState, useEffect } from 'react'

function usePersistedState(key, initialState) {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        let storageValue = localStorage.getItem(key)
        if(storageValue !== null) {
            setState(JSON.parse(storageValue))
        } else {
            setState(null)
        } 
    }, [])

    useEffect(() => {
        if(state !== null) {
            localStorage.setItem(key, JSON.stringify(state))
        } else {
            localStorage.removeItem(key)
        }
    }, [key, state])

    return [state, setState]
}

export default usePersistedState