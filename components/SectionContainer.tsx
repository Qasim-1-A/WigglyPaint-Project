import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-2 mt-0 mb-0 p-2.5 sm:p-2.5 xl:p-2.5 ">{children}</section>
  )
}
