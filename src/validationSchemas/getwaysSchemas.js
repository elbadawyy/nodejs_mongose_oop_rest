import yup from "yup"

export const getwayRequestSchema = yup.object({
  ip: yup.string().required().matches(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/),
  name: yup.string().required(),
   
  });