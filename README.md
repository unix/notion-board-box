<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/11304944/85104014-4d1fd300-b23a-11ea-964b-e5d7274f0e00.png" />
  <h2 align="center">Notion board box</h2>
  <p align="center">Update board information on <b>Notion</b> to Gist!</p>
</p>

---

## What is

I'm big fan of Notion, and I enjoy recording my worksor goals on the Notion board.

This project helps you automatically synchronize Notion's baord infomation to the GitHub home page (Gist),
you can browse how it works on my GitHub home page. It updates infomation every `15` minutes now,
you can also change the [settings](https://github.com/unix/notion-board-box/blob/77b57507ca71dd0ab1e1a3260dfebfa617f0dd09/.github/workflows/goals.yml#L7) yourself.

<br/>

## Setup

1. You need to have a [Notion](https://www.notion.so/) page, and that contains **Board**. e.g. [goals](https://www.notion.so/9d274b2fc30444358ef988c0d1d884b8)
2. Create a new public [GitHub Gist](https://gist.github.com/)
3. [Create a token](https://github.com/settings/tokens/new) with the gist scope and copy it.

<br/>

## Usage

**Just copy [goals.yml](https://github.com/unix/notion-board-box/blob/master/.github/workflows/goals.yml) file to any of your projects,**
modify the configs as you like, and it work.

<br />

## Environment Secrets

  - `GH_TOKEN`: The GitHub token generated above, you can configure it in project's `settings/secrets`.


<br />

## License

[MIT](https://github.com/unix/notion-board-box/blob/master/LICENSE)
