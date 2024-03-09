'use client'

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { sendEmail } from '@/actions/resendEmail'
import { toast } from 'sonner'
import { useState } from 'react'

import Button from './Button'
type Inputs = {
  email: string
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  })
  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true)
    const result = await sendEmail(data)
    if (result?.success) {
      console.log({ data: result.data })
      reset()
      toast.success('Email sent successfully')
      return
    }
    console.log(result?.error)
    toast.error('Something went wrong')
  }
  return (
    <div
      className="
      h-screen
      2xl:h-full
      relative
      max-w-7xl
      md:px-10
      justify-evenly
      mx-auto
      font-tacticsans"
    >
      <h3
        className="
        absolute
        top-[70px]
        left-[20px]
        md:top-[120px]
        uppercase
        tracking-[3px]
        text-primaryTextColor
        text-2xl
        xl:text-4xl
        "
      >
        <div className="text-sectionTitleColor">
          {`<Contact`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
              space-x-4
              gap-4
              pt-[150px]
              md:pt-[200px]
              place-items-center
              place-content-center
              w-[340px] 
              flex 
              flex-col 
              space-y-10
              mx-3
              "
      >
        <h4 className="text-lg md:text-3xl lg:text-4xl uppercase text-center">
          <span className="text-primaryAccentColor">{`{   `}</span> Any questions?
        </h4>
        <p className="text-base md:text-3xl lg:text-4xl">
          leave a request and our manager will
          <br />
          contact you within 15 minutes!
          <span className="text-2xl text-primaryAccentColor">{`   }`}</span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[340px]">
          <div className="relative text-left">
            <input
              {...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Email must be correctly',
                },
              })}
              id="email"
              placeholder="E-mail"
              className="
              peer
              h-10
              w-full
              border-b-2
              border-gray-300
              text-white
              focus:outline-none
              focus:border-white
              bg-transparent
              placeholder-transparent
              placeholder:b-white
                "
              type="email"
            />
            <label
              className="
                    absolute
                    left-0
                    -top-4
                    text-white
                    text-sm
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-white
                    peer-placeholder-shown:top-2
                    transition-all

                    "
            >
              E-mail
            </label>
          </div>
          <div className="flex items-start justify-center pt-5">
            <Button type="submit" label="Send" outline disabled={isLoading} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
