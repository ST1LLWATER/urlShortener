module.exports={
  "development": {
    "username": "st1llwater",
    "password": process.env.PASSWORD,
    "database": "stillwater-1736.data",
    "host": "free-tier6.gcp-asia-southeast1.cockroachlabs.cloud",
    "dialect": "postgres",
    "port": "26257",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    },
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "st1llwater",
    "password": process.env.PASSWORD,
    "database": "stillwater-1736.data",
    "host": "free-tier6.gcp-asia-southeast1.cockroachlabs.cloud",
    "dialect": "postgres",
    "port": "26257",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    },
    "logging": false
  }
}
