import { useState } from "react"
import Button from "./components/Button/Button"

function App(){
  const[openMenu,setOpen] = useState<boolean>(false)
  return (
    <div className=" wrap flex-col gap-20 flex w-full h-[100vh]">
        <header className=" w-[1533px]  flex items-center justify-evenly my-0 mx-auto p-4 max-h-[80px]">
            <img className="w-[163px] h-[33px]" src="/public/logo.svg" alt="" />
            <div className="flex items-center justify-evenly  gap-4">
             <a onClick={()=>setOpen(!openMenu)} className="link relative" href="#">Меню
              {
                openMenu ? 
                           <div className="absolute flex gap-2 p-4
                           flex-col min-w-[154px] left-[-34px] rounded-md top-[33px] bg-white">
                            <button onClick={()=>setOpen(!openMenu)} className="absolute top-[-36px] left-[0px] bg-white p-1 rounded-full"><img src="/public/exit.svg" alt="" /></button>
                            <a href="#" className="link text-[#5C39BA]">Услуги</a>
                            <a href="#" className="link text-[#5C39BA]">Статьи</a>
                            <a href="#" className="link text-[#5C39BA]">Вакансии</a>
                            <a href="#" className="link text-[#5C39BA]">Франшиза</a>
                          </div>
                          :
                          null
              }
             </a>
             <a className="link"  href="#">Портфолио</a>
             <a className="link"  href="#">Цены</a>
             <a className="link"  href="#">Схема работы</a>
             <a className="link"  href="#">Отзывы</a>
             <a className="link"  href="#">Контакты</a>
             <a className="link"  href="#">Гарантия</a>
            </div>
            <Button typeButton="Big">Обратный звонок</Button>
        </header>

        <section className="grid grid-cols-2">
              <div className="flex bg-red-400 items-end  flex-col justify-center">
                <span className="roboto font-black text-[55px] text-white ">
                  Ремонт под ключ от<br/> 2900 руб/м2.
                </span>
                <span className="roboto font-normal text-2xl text-white">
                При заказе ремонта делаем <br/> дизайн-проект в подарок
                </span>
                <div className="w-[173px] h-1 bg-sky-200">

                </div>

                <div>

                </div>
              </div>
              <div className="flex items-end justify-end">
                  <img src="/public/side_image.png" alt="" />
              </div>
        </section>
    </div>
  )
}

export default App
