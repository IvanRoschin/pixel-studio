import React, { useState } from 'react'
import Modal from "./Modal";
import useOrderModal from "@/hooks/useOrderModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const OrderModal = () => {
    const orderModal = useOrderModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Modal/>
  )
}

export default OrderModal