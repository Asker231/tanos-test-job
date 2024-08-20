import { useEffect, useRef, useState } from "react"
import Button from "./components/Button/Button"
import gsap from 'gsap'
import RadioButton from "./components/RadioButton/RadioButton"

function App(){
  const[openMenu,setOpen] = useState<boolean>(false)
  let image = gsap.timeline()
  useEffect(()=>{
    gsap.to('.texts',{opacity:1, x:150, delay:0.7})
    gsap.to('.texts2',{opacity:1, x:150, delay:0.8})
    gsap.to('.texts3',{opacity:1, x:150, delay:0.9})
    image.to('.image', {opacity:1, x:-2, delay:0.8})
    gsap.to('.vis',{opacity:1,delay:0.9})
    gsap.to('.form',{opacity:1,delay:1,x:-30})
  },[])

  return (
    <div className=" wrap flex-col gap-10 flex w-full h-[805px]">
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
              <div className="flex items-start  gap-10 flex-col justify-center">
                <span  className=" texts roboto font-black text-[55px] text-white ">
                  Ремонт под ключ от<br/> 2900 руб/м2.
                </span>
                <span className=" texts2 roboto font-normal text-2xl text-white">
                При заказе ремонта делаем <br/> дизайн-проект в подарок
                </span>
                <div className="texts3 w-[173px] h-1 bg-sky-200">
                </div>
                <div className=" texts3 flex flex-wrap gap-4 max-w-[447px] items-center text-white justify-between">
                    <div className="flex items-center gap-2"><img src="/public/truck.svg" alt="" />
                    Бесплатный выезд <br/>в день обращения
                    </div>
                    <div className="flex items-center gap-2"><img src="/public/guarantee.svg" alt="" />
                    Гарантия на работу<br/> до 5 лет
                    </div>
                    <div className="flex items-center gap-2"><img src="/public/time_management.svg" alt="" />
                    Жесткое соблюдение<br/> сроков
                    </div>
                </div>
              </div>
              <div className="flex items-end justify-end">
                  <img 
                   className = "image"
                   src="/public/side_image.png" alt="" />
              </div>
              <div className=" vis w-[55px] left-[85%] top-[-10px] relative  flex flex-col items-center justify-center">
               <div  className= " cursor-pointer updown absolute top-[-40px] rounded-full">
                  <img src="/public/arrow_down.svg" alt="" />
                </div>
                <span className="text-white">SCROLL</span>
              </div>
              <form className=" form p-5 justify-around items-center flex flex-col bg-white rounded-md w-[508px] h-[471px] absolute left-[45%] top-[200px]"  > 
                  <span className="w-full roboto text-[25px]">Рассчитайте <br/> стоимость ремонта</span>
                  <div className="flex flex-col w-full ">
                    <div className="flex items-center justify-between w-full ">
                    <span>Площадь квартиры:</span>
                    <span>68м2</span>
                    </div>  
                    <input type="range" name="" max={100} min={0} id="" />
                  </div>
                  <div className="flex flex-col w-full ">
                      <span>Тип жилья:</span>
                      <div className="flex flex-row items-center justify-around">
                        <div className="flex flex-row gap-2 items-center">
                            <RadioButton/>
                            <span>Вторичное <br/>жилье</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <RadioButton/>
                            <span>Новостройка</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <RadioButton/>
                            <span>Новостройка</span>
                        </div>
                      </div>
                  </div>

                <div className="flex flex-col w-full">
                <span>Кол-во комнат:</span>
                  <div className="flex gap-4 w-full justify-around">
                  <div className="flex flex-row gap-2">
                            <RadioButton/>
                            <span>1</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <RadioButton/>
                            <span>2</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <RadioButton/>
                            <span>3+</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <RadioButton/>
                            <span>Студия</span>
                        </div>
                  </div>
                </div>
                  <Button typeButton="Small">ОТПРАВИТЬ</Button>
              </form>
        </section>
    </div>
  )
}

export default App
