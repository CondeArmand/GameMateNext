import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="h-screen">
    <div className="container h-full px-6 py-24">
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <header className="flex flex-col gap-4 w-full max-w-[350px] pl-16">
              <h1 className="font-sans text-4xl font-bold text-aliceblue-50 pl-4 ">
                GameMate
              </h1>
              <p className="font-sans font-normal text-base text-aliceblue-50">
              O GameMate é uma plataforma web que ajuda os jogadores a gerenciar seus jogos em um só lugar, permitindo marcar o progresso e importar automaticamente jogos e conquistas de várias lojas de jogos. 

Com funcionalidades essenciais como visualização de estatísticas e compartilhamento de relatórios, o GameMate é a solução para a fragmentação de jogos em diferentes plataformas. A plataforma será confiável, segura e compatível com vários dispositivos e navegadores.
              </p>
            </header>
        </div>
  
       
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
          <form>
           
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-aliceblue-50"
                id="email"
                placeholder="Seu email" />
              <label
                htmlFor="exampleFormControlInput3"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out translate-y-[-2rem]  dark:text-neutral-200 dark:peer-focus:text-primary"
                >Email
              </label>
            </div>
  
           
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:peer-focus:text-primary opacity-0.8 border-b-2 border-aliceblue-50"
                id="password"
                placeholder="Senha" />
              <label
                htmlFor="exampleFormControlInput33"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out translate-y-[-2rem]  dark:text-neutral-200 dark:peer-focus:text-primary"
                >Senha
              </label>
            </div>
  
            
            <div className="mb-6 flex items-center justify-end">
              
  
             
              <a
                href="#!"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Esqueceu a senha?</a
              >
            </div>
  
        
            <button
              type="submit"
              className="bg-gray-400 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Entrar
            </button>
  
           
            <div
              className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p
                className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OU
              </p>
            </div>
  
           
            <a
              className=" bg-aliceblue-50 mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light">
             
             
              Continue com o Google
            </a>
           
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
