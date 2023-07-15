export const validateEmail = (email:string) => {
    const regex:any = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$','g')
    return regex.test(email)
}
