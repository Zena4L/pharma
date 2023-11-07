import request from "supertest";
import app from "../../../app";

it("should not return with a 404", async () => {
  const response = await request(app).post("/api/v1/product/new").send({});
  expect(response.status).not.toEqual(404);
});
it("should return with a 201 on succes", async () => {
  const response = await request(app).post("/api/v1/product/new").send({
    name: "test drug",
    description: "for test",
    price: 1,
    stockQuantity: 1,
    category: "test",
    image: "test",
  });
  expect(response.status).toEqual(201);
});
