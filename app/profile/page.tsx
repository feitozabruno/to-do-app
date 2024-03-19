"use client";

import { ArrowLeft, Camera, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import Input from "../_components/input";

// import { ChangeEvent } from "react";
// event: ChangeEvent<HTMLInputElement>

export default function Profile() {
  return (
    <main>
      <header className="h-36 w-full bg-base-gray-700">
        <div className="mx-auto flex h-full w-full max-w-[46rem] items-center pl-4">
          <Link href="/">
            <ArrowLeft className="h-10 w-10 text-base-gray-300" />
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-[22rem] flex-col gap-16">
        <div className="mt-[-6rem] flex items-center justify-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-base-gray-400">
            <User className="h-24 w-24 text-base-gray-100" />

            <div className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-purple-base">
              <Camera className="h-5 w-5 text-base-gray-100" />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2">
          <form className="flex w-full flex-col gap-2 text-base-gray-100">
            <Input
              type="text"
              name="text"
              id="text"
              value="Seu nome escrito aqui"
              // onChange={onChange}
              icon={<User className="h-5 w-5 text-base-gray-300" />}
            />

            <Input
              type="email"
              name="email"
              id="email"
              value="Seu email escrito aqui"
              // onChange={onChange}
              icon={<Mail className="h-5 w-5 text-base-gray-300" />}
            />

            <div className="h-4"></div>

            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Senha atual"
              // onChange={onChange}
              icon={<Lock className="h-5 w-5 text-base-gray-300" />}
            />

            <Input
              type="password"
              name="password"
              id="email"
              placeholder="Nova senha"
              // onChange={onChange}
              icon={<Lock className="h-5 w-5 text-base-gray-300" />}
            />

            <button
              className="mt-4 rounded-lg bg-base-gray-100 p-4 font-bold text-base-gray-700"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
