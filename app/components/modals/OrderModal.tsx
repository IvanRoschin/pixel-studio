'use client'

import { sendEmail } from '@/actions/resendEmail'
import useOrderModal from '@/hooks/useOrderModal'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'sonner'
import * as Yup from 'yup'
import Heading from '../Heading'
import Modal from './Modal'

export interface SubmitFormInterface {
  email: string
  name: string
  message: string
}

const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/
const emailRegex = /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const orderSchema = Yup.object().shape({
  name: Yup.string()
    .max(20)
    .min(3)
    .matches(nameRegex, { message: 'Only Cirilyk or Latin letters' })
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegex, { message: 'must include @, min 1 max 63 symbols' })
    .required('Email is required'),
  message: Yup.string().max(20, 'Max 20 symbols').min(5, 'Min 5 symbols').required(),
})

const OrderModal = () => {
  const orderModal = useOrderModal()
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: orderSchema,
    onSubmit: async (values, actions) => {
      console.log('values:', values)
      setIsLoading(true)
      const result = await sendEmail(values)
      if (result?.success) {
        console.log({ data: result.data })
        await new Promise(resolve => setTimeout(resolve, 1000))
        actions.resetForm()
        orderModal.onClose()
        toast.success('Email sent successfully')
        return
      }
      console.log(result?.error)
      toast.error('Something went wrong')
    },
  })

  const bodyContent = (
    <div className="md:max-h-[300px] xl-max-h-screen flex flex-col gap-4 text-primaryBackground">
      <Heading title="Send us an email" subtitle="and we`ll contact you" />
      <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col space-y-8">
        <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            placeholder=" "
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            className={`
          peer
          w-full
          h-10
          p-6
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70 disabled:cursor-not-allowed
          text-neutral-700
          placeholder-white
          placeholder:b-black
          placeholder:text-base 
          ${errors?.name && touched.name ? 'border-rose-300' : 'border-neutral-300'} ${
            errors?.name && touched.name ? 'focus:border-rose-300' : 'focus:border-neutral-500'
          }`}
          />
          <label
            htmlFor="name"
            className="
                    absolute
                    left-0
                    p-2
                    pl-7
                    -top-8
                    xl:-top-2
                    text-black
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-neutral-500
                    peer-placeholder-shown:top-2
                    transition-all"
          >
            Enter your name
          </label>
          {errors?.name && <p className="text-rose-300 pl-7 transition-all">{errors?.name}</p>}
        </div>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="text"
            placeholder=" "
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            className={`
          peer
          w-full
          h-10
          p-6
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70 disabled:cursor-not-allowed
          text-neutral-700
          placeholder-white
          placeholder:b-black
          placeholder:text-base 
          ${errors?.email && touched.email ? 'border-rose-300' : 'border-neutral-300'} ${
            errors?.email && touched.email ? 'focus:border-rose-300' : 'focus:border-neutral-500'
          }`}
          />
          <label
            htmlFor="email"
            className="
                    absolute
                    left-0
                    p-2
                    pl-7
                    -top-8
                    xl:-top-2
                    text-black
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-neutral-500
                    peer-placeholder-shown:top-2
                    transition-all"
          >
            Enter your email address
          </label>
          {errors?.email && <p className="text-rose-300 pl-7 transition-all">{errors?.email}</p>}
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            placeholder=" "
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            className={`
          peer
          w-full
          h-10
          p-6
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70 disabled:cursor-not-allowed
          text-neutral-700
          placeholder-white
          placeholder:b-black
          placeholder:text-base 
          ${errors?.message && touched.message ? 'border-rose-300' : 'border-neutral-300'} ${
            errors?.message && touched.message
              ? 'focus:border-rose-300'
              : 'focus:border-neutral-500'
          }`}
          />
          <label
            htmlFor="messaage"
            className="
                    absolute
                    left-0
                    p-2
                    pl-7
                    -top-8
                    xl:-top-2
                    text-black
                    peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-neutral-500
                    peer-placeholder-shown:top-2
                    transition-all"
          >
            Enter your message
          </label>
          {errors?.message && (
            <p className="text-rose-300 pl-7 transition-all">{errors?.message}</p>
          )}
        </div>
      </form>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={orderModal.isOpen}
      title="Send Email"
      actionLabel="Send"
      onClose={orderModal.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
    />
  )
}

export default OrderModal
