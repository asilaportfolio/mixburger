import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  helpers: {
    inc: function (value) { return Number(value) + 1; }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname));

const submissions = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
  const { name, email } = req.query;
  if (name && email) {
    submissions.unshift({ name, email, createdAt: new Date().toISOString() });
  }
  const metrics = {
    totalUsers: submissions.length,
    todayUsers: submissions.filter(s => new Date(s.createdAt).toDateString() === new Date().toDateString()).length,
    bounceRate: 3.4,
    avgSession: '02:15'
  };
  res.render('admin', { metrics, submissions });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});



