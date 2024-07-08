const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname));

const db = new sqlite3.Database('users.db')



app.post('/register', async(req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], function(err) {
    if (err) {
      return res.status(500).send('Ошибка регистрации пользователя.');
    }
    res.send('Регистрация прошла успешно.');
  });
});


app.post('/login', (req, res) => {

    const {username, password} = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
        if (err){
            return res.status(500).send('Ошибка авторизации.')
        }

        if(!row || !await bcrypt.compare(password, row.password)){
            return res.status(401).send('Неправильно имя пользователя или пароль.');
    
        }
        res.send('Авторизация прошла успешно.')
    })
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
