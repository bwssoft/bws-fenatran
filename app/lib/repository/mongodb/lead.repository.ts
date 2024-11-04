import { BaseRepository } from "./@base/base";

interface ILead {
  phone: string
  email: string
  name: string
}
export class LeadRepository
  extends BaseRepository<ILead> {
  constructor() {
    super({
      collection: "lead",
      db: "fenatran",
    });
  }
}

