import * as request from "supertest";
import { Application } from "../src/main";

describe("Test case", () => {
  const app = new Application();
  //beforeEach(async () => {});

  it("--couldbe--", async () => {
    const result = await app.invoke();

    expect(result).toBe("ok");
  });
});
