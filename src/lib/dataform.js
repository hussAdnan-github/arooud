import {z} from 'zod'

export const LoginSchema = z.object({
    email : z.string().email('.com يجب ان يحتووي على '),
    password : z.string().min(8,' يجب عليك ن تكتب كلمة السر'),
    oldpassword : z.string().min(8,' يجب عليك ن تكتب كلمة السر'),
    confirmpassword : z.string().min(4,'jghjgh'),
    name : z.string().min(1 , 'يجب  تعبئة الحقل'),
    countary : z.string().min(1 , 'يجب  تعبئة الحقل'),
    located : z.string().min(1 , 'يجب  تعبئة الحقل'),
    account : z.string().min(1 , 'يجب  تعبئة الحقل'),
    work : z.string().min(1 , 'يجب  تعبئة الحقل'),
    
  
   
  }).refine((data) => data.password === data.confirmpassword , {
    message :'كلمة السر متشابة' , 
    path :['o'],
  });