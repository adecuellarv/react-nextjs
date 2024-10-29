export const selectItem = (list: number[]) => {
  const randomIndex: number = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
