"use server"

import { LeadRepository } from "../repository/mongodb"

const repo = new LeadRepository()

export async function saveLead(props: { name: string, email: string, phone: string }) {
  await repo.create(props)
}