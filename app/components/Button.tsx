import React from 'react'

interface ButtonProps {
  label: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  outline?: boolean
  small?: boolean
  main?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  disabled,
  outline,
  small,
  main,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-2xl
        w-[144px]
        h-[56px]
        lg:w-[240px]
        lg:h-[86px]
        xl:text-2xl
        mb-10
        transition-all
        duration-400

        ${outline ? 'bg-transparent hover:bg-white' : 'bg-primaryAccentColor'}
        ${outline ? 'border-white' : 'border-primaryAccentColor'}
        ${outline ? 'text-white hover:text-black' : 'text-primaryBackground'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text:md'}
        ${small ? 'font-tacticsans' : 'font-tacticsans'}
        ${small ? 'border-[1px]' : 'border-2'}
        ${main ? 'opacity-100' : 'hover:scale-50'}
        `}
    >
      {label}
    </button>
  )
}

export default Button
