const Database = require("./config");

const initDb = {
  async init() {
    // inicia a conexão com o db
    const db = await Database();

    // criando minhas tabelas
    await db.exec(
      `CREATE TABLE profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        days_per_week INT,
        hours_per_day INT,
        vacation_per_year INT,
        value_per_hour INT
    )`
    );

    await db.exec(
      `CREATE TABLE jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        daily_hours INT,
        total_hours INT,
        created_at DATETIME
    )`
    );

    // inserindo os dados nas minhas tabelas
    await db.run(
      `INSERT INTO profile (
        name,
        avatar,
        monthly_budget,
        days_per_week,
        hours_per_day,
        vacation_per_year,
        value_per_hour
    ) VALUES (
        "Key Yu Wan",
        "https://avatars.githubusercontent.com/u/71357861?v=4",
        3000,
        5,
        5,
        4,
        70
    )`
    );

    await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at
) VALUES (
    "Pizzaria Guloso",
    2,
    1,
    1618338863939
)`);

    await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at
) VALUES (
    "OneTwo Project",
    3,
    47,
    1618338863939
)`);

    // fecha a conexão com o db
    await db.close();
  },
};

initDb.init()