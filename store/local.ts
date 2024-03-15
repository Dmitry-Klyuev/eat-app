export const getToken = (key: string)=> {
    try{
        const token = localStorage.getItem(key)
        if(!token){
            return null
        }
        return token
    }catch (e) {
        console.error(e)
    }
}

export const setToken = (key: string, value: string) => {
    try{
        localStorage.setItem(key, JSON.stringify(value))
    }catch (e) {
        console.error(e)
    }
}