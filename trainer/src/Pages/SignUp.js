import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../schema/LoginSchema'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    reset()
    console.log(data)
  }
  return (
    <>
      <div className="flex flex-col justify-end row-start-1 row-end-2 col-span-full z-10">
        <h1 className="text-primary font-bold text-5xl max-w-[25%] leading-none p-page px-11">
          Believe Yourself
        </h1>
        <div className="pb-8 flex items-center">
          <div className="w-[10%] h-[2px] bg-black"></div>
          <p className="font-bold pl-2">Train like a pro</p>
        </div>
      </div>
      <div className="p-page">
        <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold pt-3">Log in with your credentials</label>
          <div
            className={`pl-5 my-4 bg-additional border ${
              errors.email ? 'border-red-800' : 'border-ternary'
            } rounded-full w-full`}
          >
            <input
              className="placeholder:text-secondary w-full p-3 bg-transparent outline-none"
              placeholder="Enter your email..."
              type="text"
              {...register('email')}
            />
          </div>
          <div
            className={`pl-5 mb-4 bg-additional border ${
              errors.password ? 'border-red-800' : 'border-ternary'
            } rounded-full w-full`}
          >
            <input
              className="placeholder:text-secondary w-full p-3 bg-transparent outline-none"
              placeholder="Enter your password..."
              type="password"
              {...register('password')}
            />
          </div>
          {Boolean(Object.keys(errors).length) && (
            <p className="w-full select-none mb-4">
              {errors.email?.message || errors.password?.message}
            </p>
          )}
          <button className="bg-primary py-[12px] px-8 w-full font-semibold text-base tracking-wide uppercase rounded-full">
            log in
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp
