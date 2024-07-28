import {z} from 'zod'

export const LoginSchema = z.object({
    // email : z.string().email('.com يجب ان يحتووي على '),
    // firstName : z.string().min(1 , 'يجب  تعبئة الحقل'),
    // countary : z.string().min(1 , 'يجب  تعبئة الحقل'),
    // located : z.string().min(1 , 'يجب  تعبئة الحقل'),
    // account : z.string().min(1 , 'يجب  تعبئة الحقل'),
    // work : z.string().min(1 , 'يجب  تعبئة الحقل'),
    password : z.string().min(8, 'كلمة المرور الخاصة بك يجب أن تتضمن 8 حروف على الأقل.'),
    oldpassword : z.string().min(8,' يجب عليك ن تكتب كلمة السر'),
    confirm : z.string().min(8, 'كلمة المرور الخاصة بك يجب أن تتضمن 8 حروف على الأقل.'),
  }) .refine((data) => data.password === data.confirm, {
    message: "كلمة السر غير متتطابقة",
    path: ["confirm"],
});