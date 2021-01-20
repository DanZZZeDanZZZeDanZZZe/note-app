const generateRanges = (count, limit) => {
  if (count < limit) return [{ start: 0, end: count - 1 }]
  let currentIndex = 0

  const volumes = new Array(Math.floor(count / limit)).fill(limit)
  const remainder = count % volumes

  if (remainder) {
    volumes.push(remainder)
  }

  return volumes.map((volume) => {
    const start = currentIndex
    currentIndex = currentIndex + volume
    return { start, end: currentIndex - 1 }
  })
}

export default generateRanges
