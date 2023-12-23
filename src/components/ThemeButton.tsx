import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
interface ButtonProps {
  className: string,
  children: React.ReactNode
}
function ThemeButton({ className, children }: ButtonProps) {
  return (
    <div className={`${className} border border-white rounded-full bg-lightBlue px-5 py-2 cursor-pointer transition hover:bg-lightBlue/90 flex items-center justify-center gap-2`}>
      <p className="text-white text-center">{children}</p>
      <FontAwesomeIcon className="text-white" icon={faAngleRight} />
    </div>
  )
}

export default ThemeButton;