import { z } from "zod";
const phoneRegex =  /^\+?[1-9]\d{1,14}$/;
    const ContactSchema = z.object({
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
    subject: z.string().min(1,{
      message:"reuired"
    }),
      message: z.string().optional()
  });

  export default ContactSchema;