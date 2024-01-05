const config = {
    "development": {
        "username": "root",
        "password": "password",
        "database": "trivia_dev_db",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "password",
        "database": "trivia_dev_db_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": "password",
        "database": "trivia_dev_db_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};

module.exports = config;
