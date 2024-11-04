"use client";
import Input from "../components/input";
import { useLeadForm } from "./use-lead";

export function LeadForm() {
  const { register, handleSubmit } = useLeadForm();
  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <Input
              {...register("name")}
              label="Nome"
              placeholder="Oswaldo Conti-Bosso"
              type="text"
              id="name"
            />
          </div>
          <div className="col-span-full">
            <Input
              {...register("email")}
              label="Email"
              placeholder="oswaldo@bwsiot.com"
              type="email"
              id="email"
            />
          </div>
          <div className="col-span-full">
            <Input
              {...register("phone")}
              label="Telefone"
              placeholder="+55 11 99969-7185"
              type="phone"
              id="phone"
            />
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
