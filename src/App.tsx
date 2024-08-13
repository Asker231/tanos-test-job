function App(){
  return (
    <div className=" wrap flex w-full min-h-[100vh] ">
        <header className="bg-red-400 w-[1533px]  flex items-center justify-evenly my-0 mx-auto p-4 max-h-12">
            <img className="w-[163px] h-[33px]" src="/public/logo.svg" alt="" />
            <div className="flex items-center justify-evenly gap-4">
             <a className="link" href="#">Меню</a>
             <a className="link"  href="#">Портфолио</a>
             <a className="link"  href="#">Цены</a>
             <a className="link"  href="#">Схема работы</a>
             <a className="link"  href="#">Отзывы</a>
             <a className="link"  href="#">Контакты</a>
             <a className="link"  href="#">Гарантия</a>
            </div>
        </header>
    </div>
  )
}

export default App
