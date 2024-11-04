"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from "next/navigation"

const schema = z.object({
  name: z.string().min(3, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z
    .string()
    .min(11, 'O telefone deve ter no mínimo 10 dígitos')
    .max(15, 'O telefone deve ter no máximo 15 dígitos')
    .regex(/^\d+$/, 'O telefone deve conter apenas números'),
});

export type Schema = z.infer<typeof schema>;

export function useLeadForm() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    setValue,
    reset: hookFormReset,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const router = useRouter()

  const handleSubmit = hookFormSubmit(async () => {
    try {
      router.push("/memory-game")
    } catch (e) {
      console.error(e)
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    control,
    setValue,
    reset: hookFormReset,
  };
}
