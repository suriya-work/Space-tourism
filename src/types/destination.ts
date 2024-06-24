import { StaticImageData } from "next/image"

export type DestinationtPropsType = {
  distance: number | string
  travelTime: number | string
}



export interface DestinationDataType {
  title: string
  image: StaticImageData
  description: React.ReactNode
}