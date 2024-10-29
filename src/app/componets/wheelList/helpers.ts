export const selectItem = (list: number[]) => {
  const randomIndex: number = Math.floor(Math.random() * list.length)
  return randomIndex
}

export const getNewPosition = (
  currentArray: number[],
  currentSelected: number
) => {
  let selected = currentSelected
  //sum
  selected = selected + 1
  if (selected >= currentArray.length) selected = 0

  return selected
}
