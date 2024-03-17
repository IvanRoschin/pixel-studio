import React from 'react'

interface ButtonProps {
  label: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  outline?: boolean
  small?: boolean
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, disabled, outline, small }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-3xl
        xl:text-2xl
        mb-10
        transition-all
        duration-400

        ${outline ? 'bg-transparent hover:bg-white' : 'bg-primaryAccentColor'}
        ${outline ? 'border-white' : 'border-primaryAccentColor'}
        ${outline ? 'text-white hover:text-black' : 'text-primaryBackground'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-xl'}
        ${small ? 'font-tacticsans' : 'font-tacticsans'}
        ${small ? 'border' : 'border-2'}
        ${small ? 'w-[185px] h-[50px]' : 'w-[256px] h-[70px]'}
        `}
    >
      {label}
    </button>
  )
}

export default Button
