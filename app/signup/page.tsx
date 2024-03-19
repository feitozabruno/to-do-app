import { Mail, Lock, User } from "lucide-react";
import Input from "../_components/input";

export default function SignUp() {
  return (
    <main className="mx-auto my-auto flex h-full w-full max-w-[22rem] flex-col items-center justify-center">
      <header className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-black text-base-gray-100">
          <span className="text-blue-base">To</span>
          <span className="text-purple-base">Do</span> App
        </h1>
        <p className="text-sm text-base-gray-300">
          Aplicação para salvar e gerenciar suas tarefas.
        </p>
      </header>

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h2 className="my-12 text-2xl font-bold text-base-gray-100">
          Crie sua conta
        </h2>
        <form className="flex w-full flex-col gap-2 text-base-gray-100">
          <Input
            type="text"
            name="text"
            id="text"
            placeholder="Nome"
            icon={<User className="h-5 w-5 text-base-gray-300" />}
          />

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            icon={<Mail className="h-5 w-5 text-base-gray-300" />}
          />

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            icon={<Lock className="h-5 w-5 text-base-gray-300" />}
          />

          <button
            className="mt-4 rounded-lg bg-base-gray-100 p-4 font-bold text-base-gray-700"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>

      <footer className="mt-32">
        <a className="text-blue-base no-underline" href="">
          Voltar para o login
        </a>
      </footer>
    </main>
  );
}
