'use client'

import { sendEmail } from '@/actions/resendEmail'
import useOrderModal from '@/hooks/useOrderModal'
import { ErrorMessage } from '@hookform/error-message'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Heading from '../Heading'
import Input from '../Input'
import Modal from './Modal'

const OrderModal = () => {
  const orderModal = useOrderModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setIsLoading(true)
    const result = await sendEmail(data)
    if (result?.success) {
      console.log({ data: result.data })
      reset()
      orderModal.onClose()
      toast.success('Email sent successfully')
      return
    }
    console.log(result?.error)
    toast.error('Something went wrong')
  }
  const bodyContent = (
    <div className="md:max-h-[300px] xl-max-h-screen flex flex-col gap-4 text-primaryBackground">
      <Heading title="Send us an email" subtitle="and we`ll contact you" />
      <Input
        id="name"
        {...register('name', {
          required: 'This is required.',
          pattern: {
            value: /^[a-zа-щьюяіїєґ'-]+$/i,
            message: 'This input is number only.',
          },
          maxLength: {
            value: 10,
            message: 'This input exceed maxLength.',
          },
        })}
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <ErrorMessage errors={errors} name="name" />
      <ErrorMessage errors={errors} name="name" render={({ message }) => <p>{message}</p>} />

      <Input
        id="email"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="message"
        type="text"
        label="Message"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={orderModal.isOpen}
      title="Send Email"
      actionLabel="Send"
      onClose={orderModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}

export default OrderModal
