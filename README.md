# ゆぶね

日々の日記に、二十四節気・七十二候がそっと添えられる個人用の日記サイト。

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:4321/` を開くとトップページが表示されます。

```bash
npm run build
```

で `dist/` に静的サイトが出力されます。

> **補足**: このプロジェクトはClaudeの作業環境（ネットワーク制限あり）で
> ファイル一式を作成したものです。`npm install` によるAstro本体の取得と、
> `npm run dev` / `npm run build` の実際の動作確認は、お手元の環境で
> 行ってください。ロジック部分（`src/lib/getSeason.ts`）は366日分（うるう年含む）
> すべてで二十四節気・七十二候を欠落なく判定できることを、Astroとは独立した
> TypeScriptの動作テストで確認済みです。

## 日記の追加方法

`src/content/diary/` に `YYYY-MM-DD.md` という名前でファイルを追加するだけです。

```md
---
date: 2026-09-27
---

今日の出来事。

2段落目。
```

- フロントマターの `date` だけを持ちます。
- ファイル名（`id`）がそのまま個別ページのURL（`/diary/2026-09-27/`）になります。
- 二十四節気・七十二候は `date` の月日から自動判定されるため、年をまたいでも同じ仕組みで動作します。

## ディレクトリ構成

```
src/
  content/
    diary/            … 日記のMarkdownファイル
  content.config.ts    … Content Collectionsの定義（Astro 5 / Content Layer API）
  lib/
    seasons.ts         … 二十四節気・七十二候のデータ
    getSeason.ts       … 日付→節気・候の判定ロジック（年をまたいで動作）
  layouts/
    Layout.astro       … 共通レイアウト・スタイル
  pages/
    index.astro        … トップページ（最新5件）
    diary/[id].astro   … 日記の個別ページ
    archive/index.astro… 全件一覧（年別/月別/節気別アーカイブの土台）
```

## 今後の拡張（アーカイブ）

`archive/index.astro` は現状すべての日記を新しい順に並べているだけですが、
`getCollection('diary')` で取得した一覧に対して

- `entry.data.date.getFullYear()` で年別
- `entry.data.date.getMonth()` で月別
- `getSeason(dateStr).sekki` で二十四節気別

にグルーピング・フィルタリングするページを追加すれば、
既存の構造を変えずにアーカイブ機能を拡張できます。

## 完成条件チェックリスト

- [ ] `http://localhost:4321/` が表示できる
- [ ] 「ゆぶね」が表示される
- [ ] Markdownの日記がトップページに表示される
- [ ] 日付から二十四節気が自動表示される
- [ ] 日付から七十二候が自動表示される
- [ ] 季節情報が `#4E8CCF` で表示される
- [ ] 日付が `#888888` で表示される
- [ ] Noto Serif JPが使用される
- [ ] 「もっと読む →」から個別記事を開ける
- [ ] `npm run build` が成功する
- [ ] 新しい `YYYY-MM-DD.md` を追加するだけで日記が増やせる

お手元での確認をお願いします。もし `npm run dev` や `npm run build` でエラーが出た場合は、
そのエラーメッセージをそのまま貼っていただければ、原因を特定して修正します。
