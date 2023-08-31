export const validateEmail = (email:string) => {
    const regex:any = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$','g')
    return regex.test(email)
}

export const randomNumber = (max:number, min:number) => {
    return Math.floor(Math.random() * (max - min) + min) 
}