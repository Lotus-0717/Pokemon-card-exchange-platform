import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
interface ButtonProps {
  className?: string
  children: React.ReactNode
}
function ThemeButton({ className = '', children }: ButtonProps) {
  return (
    <div className={`${className} rounded-full bg-lightBlue px-5 py-2 cursor-pointer transition hover:bg-lightBlue/90 flex items-center justify-center gap-2`}>
      <div className="text-white text-center">{children}</div>
      <FontAwesomeIcon className="text-white" icon={faAngleRight} />
    </div>
  )
}

function SocialLogInButton({ className = '', children }: ButtonProps) {
  return (
    <div className={`rounded-full border px-5 py-2 cursor-pointer transition flex items-center justify-center gap-2 ${className}`}>
      {children}
    </div>
  )
}

export default ThemeButton;

export {SocialLogInButton};