import {z} from 'zod'

export const LoginSchema = z.object({
    email : z.string().email('.com يجب ان يحتووي على '),
    name : z.string().min(1 , 'يجب  تعبئة الحقل'),
    countary : z.string().min(1 , 'يجب  تعبئة الحقل'),
    located : z.string().min(1 , 'يجب  تعبئة الحقل'),
    account : z.string().min(1 , 'يجب  تعبئة الحقل'),
    work : z.string().min(1 , 'يجب  تعبئة الحقل'),
    
  
   
  })  