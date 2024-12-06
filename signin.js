const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',      // MySQL host (default is 'localhost')
    user: 'root',           // MySQL username
    password: '',           // MySQL password (if any)
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL...');

    // Step 1: Create the database if it doesn't exist
    const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS my_tinder_app';
    db.query(createDatabaseQuery, (err, result) => {
        if (err) {
            console.log('Error creating database:', err);
            return;
        }
        console.log('Database created or already exists.');

        // Step 2: Switch to the newly created database
        db.query('USE my_tinder_app', (err, result) => {
            if (err) {
                console.log('Error selecting database:', err);
                return;
            }
            console.log('Using my_tinder_app database.');

            // Step 3: Create the users table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    username VARCHAR(255) NOT NULL,
                    name VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL
                )
            `;
            db.query(createTableQuery, (err, result) => {
                if (err) {
                    console.log('Error creating table:', err);
                    return;
                }
                console.log('Users table created or already exists.');
                db.end();  // Close the connection after the task is complete
            });
        });
    });
});
