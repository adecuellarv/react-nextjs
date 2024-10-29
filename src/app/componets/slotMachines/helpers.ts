export const getArrayAwards = () => {
  const limitAwards: number = 7
  const minValues = 3
  const maxValue = 200
  const newArray: number[] = []
  for (let i = 0; i < limitAwards; i++) {
    const randomNum =
      Math.floor(Math.random() * (maxValue - minValues + 1)) + minValues
    if (!newArray.includes(randomNum)) newArray.push(randomNum)
  }
  return newArray
}
