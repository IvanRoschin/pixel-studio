'use client'

import React from 'react'

interface InputProps {
  id: string
  name: string
  type?: React.HTMLInputTypeAttribute
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  error?: boolean
  label: string
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  onChange,
  value,
  onBlur,
  error,
  label,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        placeholder=" "
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={`
          peer w-full h-10 p-6 bg-white border-2 rounded-md outline-none transition
          disabled:opacity-70 disabled:cursor-not-allowed text-neutral-700
          ${error ? 'border-rose-300 focus:border-rose-300' : 'border-neutral-300 focus:border-neutral-500'}
        `}
      />
      <label
        htmlFor={id}
        className="
          absolute left-0 p-2 pl-7 -top-8 xl:-top-2 text-black
          peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500
          peer-placeholder-shown:top-2 transition-all
        "
      >
        {label}
      </label>
    </div>
  )
}

export default Input