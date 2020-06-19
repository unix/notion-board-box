import { CommandMajor, SubOptions, CommandArgsProvider } from 'func'
import { getNotionTable, updateGist, getRandomEmoji } from '../utils'

@CommandMajor()
@SubOptions([
  { name: 'id', type: String },
  { name: 'page', type: String },
  { name: 'title', type: String },
])
export class Major {
  private token: string
  private id: string
  private page: string
  private url: string = '[goals.unix.bio](https://goals.unix.bio/)'

  constructor(private args: CommandArgsProvider) {
    this.check()
    this.init().catch(err => {
      console.error(err)
      process.exit(1)
    })
  }

  check() {
    this.token = process.env['GH_TOKEN']
    this.id = this.args.option.id
    this.page = this.args.option.page
    if (!this.token) {
      console.error('Env "GH_TOKEN" missing.')
      process.exit(1)
    }
    if (!this.id) {
      console.error('Params "id" missing.')
      process.exit(1)
    }
    if (!this.page) {
      console.error('Params "page" missing.')
      process.exit(1)
    }
    if (this.args.option.url) {
      this.url = this.args.option.url
    }
  }

  async init() {
    const table = await getNotionTable(this.page)
    const showDoing = table.doing.slice(0, 2).reduce((pre, current) => {
      const item = ` - ${current}`
      return pre ? `${pre}\n${item}` : item
    }, '')
    const showDoingMarkdown =
      table.doing.length <= 2 ? `${showDoing}\n` : `${showDoing}\n - And more...`
    const tagsString = table.tags
      .reduce((pre, current) => `${pre} ${getRandomEmoji()}${current.name}(${current.count})`, '')
      .trim()

    await updateGist(this.id, this.token, {
      filename: 'goals.md',
      description: 'Goals (click to view details)',
      content: `🚀 Doing(${table.doing.length}):\n${showDoingMarkdown}\n${tagsString}\n
----\n ### View each goal on Notion: ${this.url}\n\n *project based on [notion-board-box](https://github.com/unix/notion-board-box).*`,
    })
    console.log('done.')
  }
}
