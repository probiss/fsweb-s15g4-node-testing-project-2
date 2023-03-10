const db = require("./data/db-config");
const server = require("./api/server");
const superTest = require("supertest");

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
});
beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
});
afterAll(async () => {
    await db.destroy();
});

