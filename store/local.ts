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
        localStorage.setItem(key, value.toString())
    }catch (e) {
        console.error(e)
    }
}