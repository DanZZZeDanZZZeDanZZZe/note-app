const generateRanges = (count, limit) => {
  if (count < limit) return [[0, count - 1]]
  let currentIndex = 0

  const volumes = new Array(Math.floor(count / limit)).fill(limit)
  const remainder = count % volumes

  if (remainder) {
    volumes.push(remainder)
  }

  return volumes.map((volume) => {
    const start = currentIndex
    currentIndex = currentIndex + volume
    return [start, currentIndex - 1]
  })
}

export default generateRanges
