import {format} from 'date-fns'

export default function DateComponent({
  dateString,
  className,
}: {
  dateString: string | undefined
  className?: string
}) {
  if (!dateString) {
    return null
  }

  return (
    <time dateTime={dateString} className={className}>
      {format(new Date(dateString), 'MM.dd.yy')}
    </time>
  )
}
