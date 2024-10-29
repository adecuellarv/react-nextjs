export const selectItem = (list: number[]) => {
  const randomIndex: number = Math.floor(Math.random() * list.length)
  return randomIndex
}

export const getNewPosition = (
  currentArray: number[],
  currentSelected: number
) => {
  let selected = currentSelected + 1
  if (selected >= currentArray.length) selected = 0
  return selected
}

export const getDisplayedAwards = (listAward: number[], awardSelected: number) => {
  const length = listAward.length;
  const displayedAwards = [];

  for (let i = -1; i <= 1; i++) {
    const index = (awardSelected + i + length) % length;
    displayedAwards.push({ value: listAward[index], index });
  }
  
  return displayedAwards;
};
