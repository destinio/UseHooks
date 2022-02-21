interface GiphyProps {
  gifId: string
  width?: string
}

export function Giphy({ gifId, width = 'auto' }: GiphyProps) {
  return <img style={{ width: `${width}` }} src={`https://i.giphy.com/media/${gifId}/giphy.gif`} />
}
