'use client'

import { sendEmail } from '@/actions/resendEmail'
import { ContactInterface } from '@/sanity/interface'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Button from './Button'

interface ContactProps {
  contact: ContactInterface
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
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
        md:text-left
        md:flex-row
        md:px-10
        mx-auto
        mt-12
      "
    >
      <h3 className="sectionTitle">
        <div className="text-sectionTitleColor">
          {`<${contact?.title}`}
          <span className="text-primaryAccentColor">{`/`}</span>
          <span>{`>`}</span>
        </div>
      </h3>
      <div
        className="
              space-x-4
              md:space-x-0
              gap-4
              md:pt-0
              w-[340px]
              md:w-[640px]
              lg:w-[920px]  
              xl:w-full
              flex 
              flex-col 
              space-y-10
              md:space-y-5
              lg:space-y-10
              xl:space-y-15
              mx-auto
              "
      >
        <h4 className="text-lg md:text-2xl lg:text-4xl uppercase text-center md:text-left">
          <span className="text-primaryAccentColor">{`{   `}</span> {contact?.mainTitle}
        </h4>
        <p className="text-base md:text-2xl lg:text-4xl">
          leave a request and our manager
          <br />
          will contact you within 15 minutes!
          <span className="text-2xl text-primaryAccentColor">{`   }`}</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
              flex 
              flex-col 
              space-y-2 
              w-[310px]  
              md:w-[640px]
              lg:w-[920px]  
              xl:w-[1200px]
              "
        >
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
              placeholder:text-base 
              md:placeholder:text-2xl 
              lg:placeholder::text-4xl
                "
              type="email"
            />
            <label
              className="
                    absolute
                    left-0
                    -top-4
                    xl:-top-10
                    text-white
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
            <Button type="submit" label="Send" outline disabled={isLoading} small />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
