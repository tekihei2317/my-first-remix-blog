# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## メモ

```bash
DB=my-first-remix-blog

# データベースの作成
wrangler d1 database create $DB

# データベースの作成（ローカル）
wrangler d1 execute $DB  --local --command='select 1'

# マイグレーションの作成
wrangler d1 migrations create $DB <migration_name>

# マイグレーションの実行（ローカル）
wrangler d1 migrations apply $DB --local

# シード（ローカル）
wrangler d1 execute $DB --local --file=./seed.sql
```
