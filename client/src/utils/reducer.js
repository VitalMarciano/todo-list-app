export const initState = {
    view: 'auth', // signin, home
    user: null,
    tasks: [],
    error: ''

    
};

export const reducer = (state , action) => {
    switch (action.type) {
        case 'SET_VIEW':
            return {
                ...state,
                view: action.param
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.param
            }
        case 'SET_TASKS':
            return {
                ...state,
                tasks: action.param
            }
        case 'EXIT':
            storage.clearTempWallet()
            return {
                ...state,
                user: null,
                tasks: '',
                view: 'login'
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.param
            }
        default:
            return state
    }
}
