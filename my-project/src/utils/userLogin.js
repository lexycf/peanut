import { userinfo } from '@/api/user';
import { Toast } from "mint-ui";
import router from '../router'
export function getUserInfoLogin() {
    userinfo().then(res => {
        let result=res.data;
        
        if(result.code==0){
            return result.data.uid;

        }else if(result.code==10){
             location.href='/#/activity'
            
        }else{
            Toast(result.message);
        }
        
    })
}