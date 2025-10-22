const GeneratePassword=({length=8})=>{
    const charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password="";
    for(var i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*charset.length);
        password=password+charset[randomIndex];
    }
    return password;
}

export default GeneratePassword;