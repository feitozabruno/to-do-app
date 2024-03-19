import { Power, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-52 flex-col items-center justify-center bg-base-gray-700 p-4">
      <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-base-gray-400">
            <User className="h-10 w-10 text-base-gray-100" />
          </div>

          <div className="flex flex-col text-base-gray-100">
            <span className="text-sm text-base-gray-300">Bem vindo,</span>
            <strong>Nome usuário</strong>
          </div>
        </div>

        <div>
          <button type="button">
            <Power className="h-8 w-8 text-base-gray-300" />
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-5xl font-black text-blue-base">
          To<span className="text-purple-base">Do</span>
        </h1>
      </div>
    </header>
  );
}
