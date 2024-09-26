import { z } from "zod";
const phoneRegex =  /^\+?[1-9]\d{1,14}$/;
    const ConsultSchema = z.object({
    email: z
      .string()
      .email({
        message: "Invalid email address",
      }),
     name:z.string().min(1,{message:" required"}),

     phone: z.string().refine((phone) => phoneRegex.test(phone), {
      message: 'Invalid phone number format.',
    }),
    address:z.string().min(1,{message:"requied"}),
    area: z.string().min(1,{
      message:"reuired"
    }),
      description: z.string().min(30, {
        message: " must be at least 30 characters.",
      }) 
  });


  export default ConsultSchema;