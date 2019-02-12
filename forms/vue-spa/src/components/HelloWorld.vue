<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>名前: <input type="text" name="name" required /></label>
      </p>
      <p>
        <label>メールアドレス: <input type="email" name="email" required /></label>
      </p>
      <p>
        <label>問い合わせ内容: <select name="reason" required>
          <option value="開発の依頼">開発の依頼</option>
          <option value="顧問・アドバイザーの依頼">顧問・アドバイザーの依頼</option>
          <option value="ワークショップ・研修の依頼">ワークショップ・研修の依頼</option>
          <option value="取材・イベント登壇の依頼">取材・イベント登壇の依頼</option>
          <option value="その他">その他</option>
          <option value="etc">etc</option>
        </select></label>
      </p>
      <p>
        <label>本文: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">送信</button>
      </p>
    </form>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  text-align: left;
  max-width: 320px;
  margin: 0 auto;
}

input, select, textarea {
  box-sizing: border-box;
  display: block;
  margin: 4px 0;
  padding: 4px;
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}

button[type=submit] {
  width: 100%;
  padding: 4px;
}
</style>
