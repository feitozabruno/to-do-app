"use client";

import { ReactNode } from "react";

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: () => void;
  icon: ReactNode;
  type: string;
  name: string;
  id: string;
}

export default function Input({
  icon,
  value,
  placeholder,
  type,
  name,
  id,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <input
        className="w-full rounded-lg bg-base-gray-700 p-4 pl-12 text-base-gray-100"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
      />
      <div className="absolute inset-y-0 left-0 flex items-center p-4">
        {icon}
      </div>
    </div>
  );
}
