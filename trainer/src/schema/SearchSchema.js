import * as yup from 'yup'

export const schema = yup
  .object({
    searchBar: yup
      .string()
      .required('required')
      .max(36, 'Too many characters')
      .matches(/[*|\":<>[\]{}`\\()';@&$]/, 'nonono'),
  })
  .required()
