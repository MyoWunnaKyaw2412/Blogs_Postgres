module.exports={
    HOST: "localhost",
    USER: "killo",
    PASSWORD: "killo",
    DB: "blogs",
    dialect: "postgres",//mysql,sqlite
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}
