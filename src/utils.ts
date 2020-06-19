import { GistBox, Updates } from '@pre-release/gist-box'
import fetch from 'node-fetch'

export interface Tag {
  name: string
  count: number
}

export interface NotionBoardGistData {
  doing: string[]
  tags: Tag[]
}

export const getNotionTable = async (id: string): Promise<NotionBoardGistData> => {
  const data = await fetch(`https://notion-api.splitbee.io/v1/table/${id}`, {
    headers: { 'Cache-Control': 'no-store' },
  })
  const table = await data.json()
  if (!Array.isArray(table)) {
    throw new Error('The Nition page must contain a "board".')
  }
  const doing = table
    .filter(item => `${item.Status}`.toLowerCase() === 'doing')
    .map(item => item.Name)
  const tags = table
    .reduce((pre, current) => {
      const hasStatus = pre.find(tag => tag.name === current.Status)
      if (hasStatus) {
        return pre.map(tag => {
          if (tag.name !== current.Status) return tag
          return { ...tag, count: tag.count + 1 }
        })
      }
      return [...pre, { name: current.Status, count: 1 }]
    }, [])
    .filter(tag => tag.name && tag.name.toLowerCase() !== 'doing')
  return {
    doing,
    tags,
  }
}

export type Gist = Updates

export const updateGist = async (id: string, token: string, gist: Gist) => {
  const box = new GistBox({ id, token })
  await box.update(gist)
}

export const getRandomEmoji = () => {
  const getRandomNumber = c => Math.floor(Math.random() * c)
  const emojis = [
    '⛄',
    '🐭',
    '🐶',
    '🐰',
    '🐴',
    '🐼',
    '🐧',
    '🐟',
    '👻',
    '💻 ',
    '🎉',
    '🔨',
    '🎯',
    '🍎',
    '🍉',
    '🍓',
    '🌈',
    '🐛',
  ]
  return emojis[getRandomNumber(emojis.length)]
}
