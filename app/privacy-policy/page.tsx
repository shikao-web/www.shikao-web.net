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
          <h2>1. 取得する情報</h2>
          <p>お問い合わせ時に入力された氏名・メールアドレス等の情報を取得する場合があります。</p>

          <h2>2. 利用目的</h2>
          <p>取得した情報は、お問い合わせへの回答、サービス改善、重要なお知らせのために利用します。</p>

          <h2>3. 第三者提供</h2>
          <p>法令に基づく場合を除き、本人の同意なく第三者へ提供しません。</p>

          <h2>4. 改定</h2>
          <p>本ポリシーは必要に応じて改定することがあります。改定後は当ページに掲載した時点で効力を持ちます。</p>
        </div>
      </section>
    </>
  );
}
