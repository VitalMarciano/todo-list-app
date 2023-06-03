export const initState = {
    view: 'login', //
    
}

export const reducer = (state = InitState, action) => {
    switch (action.type) {
        case 'SET_VIEW':
            return {
                ...state,
                view: action.param
            }
        case 'SET_ALL':
            return {
                ...state,
                wallet: action.param.wallet,
                tickers: action.param.tickers,
                balances: action.param.balances,
                balance: action.param.balance
            }
        case 'SET_COIN':
            return {
                ...state,
                selectedCoin: action.param
            }
        case 'SET_SEND':
            return {
                ...state,
                send: action.param
            }
        case 'SET_WALLET':
            return {
                ...state,
                wallet: action.param,
                view: 'dashboard'
            }
        case 'SET_TESTNET':
            return {
                ...state,
                testnet: action.param
            }
        case 'SET_TICKERS':
            return {
                ...state,
                tickers: action.param
            }
        case 'SET_BALANCES':
            return {
                ...state,
                balances: action.param
            }
        case 'EXIT':
            storage.clearTempWallet()
            return {
                ...state,
                wallet: null,
                view: 'home'
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
