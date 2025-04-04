const express = require('express');
const mysql = require('mysql');
const db = require('./db');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.get('/api/about_me', (req, res) => {
    let sql = 'SELECT * FROM about_me';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('MySQL Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('About query result:', result); // Add this line
        res.json(result[0]);
    });
});

app.get('/api/education', (req, res) => {
    let sql = 'SELECT * FROM education';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('MySQL Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Education query result:', result); // Add this line
        res.json(result);
    });
});

app.get('/api/work_experience', (req, res) => {
    let sql = 'SELECT * FROM work_experience';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('MySQL Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Work Experience  query result:', result); // Add this line
        res.json(result);
    });
});

app.get('/api/skills', (req, res) => {
    let sql = 'SELECT * FROM skills';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('MySQL Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Skills query result:', result); // Add this line
        res.json(result);
    });
});

app.get('/api/projects', (req, res) => {
    let sql = 'SELECT * FROM projects';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('MySQL Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Projects query result:', result); // Add this line
        res.json(result);
    });
});

app.get('/api/tools', (req, res) => {
    let sql = 'SELECT * FROM tools';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('MySQL Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Tools query result:', result); // Add this line
        res.json(result);
    });
});

app.get('/api/contact', (req, res) => {
    let sql = 'SELECT email, phone FROM about_me';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('MySQL Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Contact query result:', result); // Add this line
        res.json(result[0]);
    });
});

// Handle production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});