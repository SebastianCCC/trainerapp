import * as yup from 'yup'

export const schema = yup
  .object({
    username: yup
      .string()
      .required('Your email or username is required')
      .min(5, 'Email or username is to short'),
    /*  .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email must be a valid email'), */
    password: yup.string().required('Your password is required').min(4, 'Password to short'),
  })
  .required()
