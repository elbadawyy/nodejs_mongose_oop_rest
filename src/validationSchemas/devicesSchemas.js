import yup from "yup"

export const deviceRequestSchema = yup.object({
  uid: yup.string().required(),
  vendor: yup.string().required(),
  status: yup.string().oneOf(['ofline', 'online']),
   
  });