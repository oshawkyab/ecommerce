import { memo } from "react"

const Heading = memo(({ title }: { title: string }) => {
   return (
      <h2 className='capitalize font-bold! text-2xl mb-4 mt-2'>{title}</h2>
   )
})

export default Heading