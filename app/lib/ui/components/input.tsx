import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function Input(props: Props) {
  const { label, id, ...inputProps } = props;
  return (
    <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 bg-white w-full">
      <label htmlFor={id} className="block text-xs font-medium text-gray-900">
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
      />
    </div>
  );
}
