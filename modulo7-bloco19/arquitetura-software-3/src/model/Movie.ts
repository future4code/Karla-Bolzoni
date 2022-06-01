export type movie = {
  id: string,
  title: string,
  description: string,
  durationInMinutes: number,
  yearOfRelease: number
}


export interface MovieInputDTO {
  title: string,
  description: string,
  durationInMinutes: number,
  yearOfRelease: number
}
