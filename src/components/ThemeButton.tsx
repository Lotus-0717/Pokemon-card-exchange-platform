import React from "react";
interface ButtonProps {
  className: string
}
function ThemeButton({ className }: ButtonProps) {
  return (
    <div className={`${className} border border-white rounded-full bg-lightBlue px-5 py-2 cursor-pointer`}>
      <p className="text-white text-center">看更多</p>
    </div>
  )
}

export default ThemeButton;