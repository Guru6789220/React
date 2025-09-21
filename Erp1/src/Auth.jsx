let isAuthenicated=false;
export const Auth={
    login(cd){
        isAuthenicated=true;
    },
    logout(cd){
        isAuthenicated=false;
    },

    isAuthenicated(){
        return isAuthenicated;
    },
};