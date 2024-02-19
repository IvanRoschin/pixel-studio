import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, disabled,  outline, small}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
        relative 
        disabled:opacity-70 
        disabled:cursor-not-allowed 
        rounded-lg 
        hover:opacity-80
        hover:scale-105 
        transition
        w-28
        mb-10
        ${outline ? "bg-white" : "bg-[#F7AB0A]"} 
        ${outline ? "border-black" : "border-[#F7AB0A]"} 
        ${outline ? "text-black" : "text-white"} 
        ${small ? "py-1" : "py-3"} 
        ${small ? "text-sm" : "text:md"} 
        ${small ? "font-light" : "font-semibold"} 
        ${small ? "border-[1px]" : "border-2"}
        `}
    >
      {label}
    </button>
  );
};

export default Button;