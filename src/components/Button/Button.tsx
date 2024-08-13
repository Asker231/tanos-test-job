import { IButton } from "../../interfaces/Button"

function Button({typeButton,children,...prop}:IButton) {
  return (
    <button className = {typeButton == "Big" ? "w-[246px] h-[60px] bg-primary text-white roboto uppercase font-bold rounded-md" : " uppercase w-[185px] h-[60px] bg-primary text-white roboto font-bold rounded-md" }{...prop}>{children}</button>
  )
}

export default Button