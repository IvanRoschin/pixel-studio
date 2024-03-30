'use client'

interface InputProps {
  id: string
  name: string
  type?: string
  onChange: () => void
  value: {
    email: string
    name: string
    message: string
  }
  onBlur?: () => void
  errors?: boolean
  label?: string
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  onChange,
  value,
  onBlur,
  errors,
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
    </div>
  )
}

export default Input

// import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

// interface InputProps {
//   id: string
//   label: string
//   type?: string
//   disabled?: boolean
//   required?: boolean
//   register: UseFormRegister<FieldValues>
//   errors: FieldErrors
// }

// const Input: React.FC<InputProps> = ({ id, label, type, disabled, required, register, errors }) => {
//   return (
//     <div className="w-full relative">
//       <input
//         id={id}
//         disabled={disabled}
//         {...register(id, { required })}
//         placeholder=" "
//         type={type}
//         className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed  ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${
//           errors[id] ? 'focus:border-rose-500' : 'focus:border-black'
//         }`}
//       />
//       <label
//         className={`
//         text-md
//         duration-150
//         transform
//         z-10
//         origin-[0]
//         peer-focus:-translate-y-4 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}
//       >
//         {label}
//       </label>
//     </div>
//   )
// }

// export default Input
