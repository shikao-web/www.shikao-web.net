export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>プライバシーポリシー</h1>
          <p>SHIKAO-WEB における個人情報の取り扱い方針です。</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ lineHeight: 1.9 }}>
          <h2>1. このサイトについて</h2>
          <p>このサイトアドレスは <a href="https://shikao-web.net">https://shikao-web.net</a>です。</p>

          <h2>2. このサイトが収集する個人データと収集の理由</h2>
          <p>当サイトでは、以下の目的でお問い合わせフォームにて個人情報を収集します。</p>
          <ul>
            <li>サイト内エラー報告に対する返答</li>
            <li>その他お問い合わせに対する返答</li>
          </ul>
          <p>お問い合わせへの回答収集する情報には、以下が含まれます。</p>
          <ul>
            <li>お名前</li>
            <li>メールアドレスなどの連絡先</li>
            <li>お問い合わせ内容（サイト内エラーの詳細 など）</li>
          </ul>

          <h2>3. 収集した個人データの取り扱い</h2>
          <p>以下の場合を除き、第三者に個人情報を開示することはありません。</p>
          <ul>
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体、財産の保護が必要な場合</li>
          </ul>
          <p>お問い合わせフォームにて送信されたデータは、対応が終了した後、適切な期間が経過した後に削除します。</p>
          
          <h2>4. 改定</h2>
          <p>本ポリシーは必要に応じて改定することがあります。改定後は当ページに掲載した時点で効力を持ちます。</p>
        </div>
      </section>
    </>
  );
}
