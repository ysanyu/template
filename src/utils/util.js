export const trasfer = (time) => {
  const date = new Date(time.replace(/-/g, '/'))
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const h = date.getHours()
  const mm = date.getMinutes()
  const new_date = `${y}年${m}月${d}日 ${h}:${mm}`
  return new_date
}
