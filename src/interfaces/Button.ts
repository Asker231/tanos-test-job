import { ButtonHTMLAttributes, ReactNode } from "react";



type ButtonType = "Big"|"Small"

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    typeButton:ButtonType
}