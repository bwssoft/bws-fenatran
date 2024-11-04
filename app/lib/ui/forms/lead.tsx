"use client";
import { useLeadForm } from "./use-lead";

export function LeadForm() {
  const { register, handleSubmit, errors } = useLeadForm();
  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 bg-white w-full">
              <label
                htmlFor={"name"}
                className="block text-xs font-medium text-gray-900"
              >
                Nome
              </label>
              <input
                placeholder="BWS Iot"
                type="text"
                id="name"
                {...register("name")}
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              />
            </div>
            <p className="text-sm">{errors?.name?.message ?? ""}</p>
          </div>
          <div className="col-span-full">
            <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 bg-white w-full">
              <label
                htmlFor={"email"}
                className="block text-xs font-medium text-gray-900"
              >
                Email
              </label>
              <input
                {...register("email")}
                placeholder="suporte@bwsiot.com"
                type="email"
                id="email"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              />
            </div>
            <p className="text-sm">{errors?.email?.message ?? ""}</p>
          </div>
          <div className="col-span-full">
            <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-600 bg-white w-full">
              <label
                htmlFor={"phone"}
                className="block text-xs font-medium text-gray-900"
              >
                Telefone
              </label>

              <input
                {...register("phone")}
                placeholder="55 11 940174266"
                type="tel"
                id="phone"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
              />
            </div>
            <p className="text-sm">{errors?.phone?.message ?? ""}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="w-full sm:max-w-xs text-center mt-12 px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Jogar
        </button>
      </div>
    </form>
  );
}
