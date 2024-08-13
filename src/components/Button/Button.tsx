import { IButton } from "../../interfaces/Button"

function Button({children,...prop}:IButton) {
  return (
    <button {...prop}>{children}</button>
  )
}

export default Button