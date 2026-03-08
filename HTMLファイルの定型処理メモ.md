# タイ語学習HTMLファイルの定型処理メモ

新しいHTMLファイルを受け取ったとき、以下の処理をまとめて行う。

---

## 1. data-pagefind-ignore の追加

以下のタグに `data-pagefind-ignore` を追加する（すでに付いている場合はスキップ）。

| 対象タグ | 備考 |
|---|---|
| `<div class="header-controls">` | |
| `<div class="header-source">` | |
| `<nav class="tab-nav">` | |
| `<div class="article-intro">` | |
| `<h2 style="...">` | 問題タブの「📝 内容確認問題（10問）」見出し |
| `<button class="answer-btn" onclick="toggleAnswer(this)">` | 全10個 |
| `<div class="dialogue-intro">` | |
| `<div class="vocab-cat-title">` | 全カテゴリ分 |
| `<table class="vocab-table">` | 全カテゴリ分 |
| `<h4>` | 例文タブの全セクション見出し |

**付けないもの（既存のまま維持）：**
- `<h1 data-pagefind-ignore>` → 新規ファイル作成時からすでに付いている
- `<h2 data-pagefind-meta="title">` → pagefind検索用のタイトルなので触らない

---

## 2. 出力ファイル名

- アップロードされたファイル名をそのまま使う
- ただし末尾に `-1` がある場合は除去する（例：`xxxx-1.html` → `xxxx.html`）

---

## 呼び出し方（一言でOK）

> 「このファイルにも定型処理をして」

または

> 「data-pagefind-ignoreを付けて」

これだけで上記の処理をすべて実行する。
