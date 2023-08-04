import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface ExibirSenhaProps {
  inputClassName?: string;
}

const ExibirSenha: React.FC<ExibirSenhaProps> = ({ inputClassName }) => {
  const [exibirSenha, setExibirSenha] = useState(false);

  const toggleExibirSenha = () => {
    setExibirSenha((prevState) => !prevState);
  };

  return (
    <div className={`relative mb-6 ${inputClassName}`}>
      <input
        type={exibirSenha ? 'text' : 'password'}
        className="peer block min-h-[auto] w-full  border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:peer-focus:text-primary opacity-0.8 border-b-2 border-aliceblue-50"
        id="password"
        placeholder="Senha"
      />

<label
                                    htmlFor="exampleFormControlInput33"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.80rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out translate-y-[-2rem]  dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Senha
                                </label>
      <span
        className="absolute right-2 top-[50%] transform translate-y-[-50%] cursor-pointer"
        onClick={toggleExibirSenha}
      >
        {exibirSenha ? <BsEyeSlash /> : <BsEye />}
      </span>
    </div>
  );
};

export default ExibirSenha;
