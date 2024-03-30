'use client'

import useOrderModal from '@/hooks/useOrderModal'
import { useFormik } from 'formik'
import { useState } from 'react'
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
    .min(10)
    .matches(nameRegex, { message: 'Only Cirilyk or Latin letters' })
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegex, { message: 'must include @, min 1 max 63 symbols' })
    .required('Email is required'),
  message: Yup.string().max(20, 'Max 20 symbols').min(5, 'Min 5 symbols').required(),
})

const onSubmit = () => {
  console.log('submited')
}

const OrderModal = () => {
  const orderModal = useOrderModal()
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: orderSchema,
    onSubmit,
  })

  console.log(errors)

  // const onSubmit: SubmitHandler<SubmitFormInterface> = async data => {
  //   setIsLoading(true)
  //   const result = await sendEmail(data)
  //   if (result?.success) {
  //     console.log({ data: result.data })
  //     reset()
  //     orderModal.onClose()
  //     toast.success('Email sent successfully')
  //     return
  //   }
  //   console.log(result?.error)
  //   toast.error('Something went wrong')
  // }
  const bodyContent = (
    <div className="md:max-h-[300px] xl-max-h-screen flex flex-col gap-4 text-primaryBackground">
      <Heading title="Send us an email" subtitle="and we`ll contact you" />
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          name="Name"
          type="text"
          onChange={handleChange}
          value={values.name}
          placeholder="Enter your name"
          onBlur={handleBlur}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Enter your email address"
          onBlur={handleBlur}
        />
        <label htmlFor="Message">Message</label>
        <input
          id="Message"
          name="Message"
          type="text"
          onChange={handleChange}
          value={values.message}
          placeholder="Enter your message"
          onBlur={handleBlur}
        />
        <button type="submit">Submit</button>
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
