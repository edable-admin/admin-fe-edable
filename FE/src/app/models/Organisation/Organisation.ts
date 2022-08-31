export interface Organisation {
  id?: string,
  ABN?: string,
  activeStatus?: boolean,
  description?: string,
  img?: string,
  name: string,
  phone: string,
  summary: string,
  totalDonationItems?: number,
  totalDonations?: number,
  website:string
}
