import React from 'react';

const FormularioCadastro: React.FC = () => {
    return (
        <div>

            
            <div className="relative mb-6" data-te-input-wrapper-init="">
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-aliceblue-50"
                    id="nome"
                    placeholder="Seu nome"
                />
                <label
                    htmlFor="nome"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.80rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out translate-y-[-2rem] dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                    Nome
                </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init="">
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-aliceblue-50"
                    id="nomeUsuario"
                    placeholder="Seu nome de usuário"
                />
                <label
                    htmlFor="nomeUsuario"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.80rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out translate-y-[-2rem] dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                    Nome de usuário
                </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init="">

            </div>

            {/* E assim por diante para outros campos, como "Confirmar senha" */}


        </div>
    );
};

export default FormularioCadastro;
