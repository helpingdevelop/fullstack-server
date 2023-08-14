import database from "../libs/db";

describe("Example Test", () => {
  afterAll(async () => {
    await database.end();
  });

  afterEach(async () => {
    await database.query("DELETE FROM users");
  });

  it("should pass", async () => {
    expect(1).toEqual(1);
  });
});
