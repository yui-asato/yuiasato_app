■サービス概要
料理のスキル診断をして、自分がどのくらいの料理レベルかわかる。
料理が苦手な人や自信がない人に、自分のレベルにあったレシピを提案してくれるサービス。

■ このサービスへの思い・作りたい理由
夫は料理経験があまりなく、自分で調べた麻婆豆腐のレシピをみて挑んだところ、調味料の分量を間違えて大失敗してしまいました。
料理初心者の人にとって、工程数が多かったり、材料が多いレシピは難易度が高いのではないか？と感じました。
初心者の人でも自分のレべルにあったレシピをみつけられるようになれば、大きな失敗が減るのではないかと思いました。
また、たまに料理をする人や自信がない人も、診断をしてレベルにあった料理を作ることで失敗が減り、自信につながり、楽しく料理ができるのではないかと考えています。

■ ユーザー層について
・料理初心者や自信がない人
・自分の料理レベルを知りたい人

■サービスの利用イメージ
ユーザー登録をしなくても、料理のレベル診断とおすすめ機能を利用できることで、手軽にアプリを利用することができるようにしたいです。
自分の料理レベルを知ることで、どのような料理から始めればよいのかわかり、失敗や苦手意識が減り、楽しく料理ができるのではないかと思います。


■ ユーザーの獲得について
まずは家族や友人にアプリを利用してもらう。診断結果のSNS投稿機能をつけて、アプリをより多くの人に利用してもらえるようにする。

■ サービスの差別化ポイント・推しポイント
料理だけの選択形式の診断サイトは検索したが見あたらなかった。
自分のレベルにあった料理を提案することで、失敗経験が減り、料理に対する自信を得ることができると考えています。

■ 機能候補
<MVPリリース>
・料理レベル診断機能
・レベルに合った料理のおすすめ機能
・レベル別料理一覧・検索機能
・診断結果のSNS投稿機能

<本リリース>
・ユーザー登録機能
・料理のお気に入り機能
・料理のコメント投稿・いいね機能
・レシピのURLを貼ったら、自分のレベルにあっているかChatGPT APIをしようして判断してくれる機能（できたら）

■ 機能の実装方針予定
・料理レベル診断機能：質問項目はChatGPTに条件を投げて5〜8項目くらいの案をだしてもらう。診断機能は回答ごとに点数をつけて、合計点数で結果が分かれるアルゴリズムを作成する。
・レベルに合った料理のおすすめ機能：料理レシピのレベルごとにテーブルを作成。診断結果ででたレベルにあった料理をおすすめとして表示できるようアルゴリズムを作成する。

使用技術
・Ruby on Rails
・Tailwind CSS
・PostgreSQL
・Docker
・ChatGPT API：料理レベル診断機能
・JQuery：マルチ検索・オートコンプリート
・GCP Recommendations A：レコメンド機能


### 画面遷移図
Figma：https://www.figma.com/design/25tEmaUohXZiWqo0gzchFA/yui_APP-%E7%94%BB%E9%9D%A2%E9%81%B7%E7%A7%BB%E5%9B%B3?node-id=0-1&t=Iw9TyAwfjPZypn25-0


＊料理レベル診断、レベルに合った料理のおすすめ機能アルゴリズム

#問題1
puts "Q1.野菜が切れますか？"
puts "1.まったく当てはまらない"
puts "2.ちょっと当てはまらない"
puts "3.当てはまる"
puts "4.まあまあ当てはまる"
puts "5.とても当てはまる"
puts "回答を入力してください"

input = gets #ユーザーの入力待ちを発生させる

#問題2
puts "Q2.肉が切れますか？"
puts "1.まったく当てはまらない"
puts "2.ちょっと当てはまらない"
puts "3.当てはまる"
puts "4.まあまあ当てはまる"
puts "5.とても当てはまる"
puts "回答を入力してください"

input2 = gets #ユーザーの入力待ちを発生させる

#問題3
puts "Q2.果物が切れますか？"
puts "1.まったく当てはまらない"
puts "2.ちょっと当てはまらない"
puts "3.当てはまる"
puts "4.まあまあ当てはまる"
puts "5.とても当てはまる"
puts "回答を入力してください"

input3 = gets #ユーザーの入力待ちを発生させる

#問題4
puts "Q2.こんにゃくが切れますか？"
puts "1.まったく当てはまらない"
puts "2.ちょっと当てはまらない"
puts "3.当てはまる"
puts "4.まあまあ当てはまる"
puts "5.とても当てはまる"
puts "回答を入力してください"

input4 = gets #ユーザーの入力待ちを発生させる

input_total = input.to_i + input2.to_i + input3.to_i + input4.to_i

#レベルを判定するif文
if 7 >= input_total
    ryori_level = 1
elsif 10 >= input_total
    ryori_level = 2
elsif 13 >= input_total
    ryori_level = 3
elsif 16 >= input_total
    ryori_level = 4
elsif 20 >= input_total
    ryori_level = 5
end

puts "あなたのレベルは #{ryori_level.to_i} です"

#料理テーブル
#テーブルにあらかじめレベルごとのレシピを登録しておく
level5_menu_table = ["ビーフシチュー"]
level4_menu_table = ["カレー"]
level3_menu_table = ["アヒージョ"]
level2_menu_table = ["オムライス"]
level1_menu_table = ["おにぎり"] 

if ryori_level == 1
    result_menu = level1_menu_table
elsif ryori_level == 2
    result_menu = level2_menu_table
elsif ryori_level == 3
    result_menu = level3_menu_table
elsif ryori_level == 4
    result_menu = level4_menu_table
elsif ryori_level == 5
    result_menu = level5_menu_table
end

puts "あなたにおすすめのレシピは #{result_menu[0]} です"