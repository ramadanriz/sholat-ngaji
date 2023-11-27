import { memo, useEffect, useState } from "react"
import { format } from "date-fns"
import id from "date-fns/locale/id"

const Time = () => {
  const [date, setDate] = useState(new Date())

  const formattedDate = format(date, `dd MMMM yyyy, kk.mm.ss`, {
    locale: id,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(() => new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [setDate])

  return (
    <p className='text-xl font-bold' data-cy='time'>
      {formattedDate}
    </p>
  )
}

memo(Time)
export default Time
