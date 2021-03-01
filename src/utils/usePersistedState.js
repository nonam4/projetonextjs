import { useState, useEffect } from 'react'

function usePersistedState(key, initialState) {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        let storageValue = localStorage.getItem(key)
        storageValue && setState(JSON.parse(storageValue))
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState