// returns yyyy-mm-dd
export default (timestamp) => {
  const date = new Date(timestamp)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}
