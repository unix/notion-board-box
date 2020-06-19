<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/11304944/85104014-4d1fd300-b23a-11ea-964b-e5d7274f0e00.png" />
  <h2 align="center">Notion board box</h2>
  <p align="center">Update board information on **Notion** to Gist!</p>
</p>

---

## Setup

1. You need to have a [Notion](https://www.notion.so/) page, and that contains **Board**. e.g. [goals](https://www.notion.so/9d274b2fc30444358ef988c0d1d884b8)
2. Create a new public [GitHub Gist](https://gist.github.com/)
3. [Create a token](https://github.com/settings/tokens/new) with the gist scope and copy it.
4. Copy [goals.yml](https://github.com/unix/notion-board-box/blob/master/.github/workflows/goals.yml) to your any github repo.

<br />

## Environment Secrets

  - `GH_TOKEN`: The GitHub token generated above, you can configure it in project's `settings/secrets`.


<br />

## License

[MIT](https://github.com/unix/notion-board-box/blob/master/LICENSE)
