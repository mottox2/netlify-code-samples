import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form name="contact" method="POST" data-netlify="true">
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
        </header>
      </div>
    );
  }
}

export default App;
