
import { jest } from "@jest/globals";
import {  deleteUserController, updateUserController } from "../src/controller/user.controller";



//Updated Blog Post Controller
describe("UpdatedBlogPostController", () => {
  test("call UpdateBlogPostController with the correct data", async () => {
    const mockRequest = {
      params: {
        id: "1377454d-6df3-4395-994c-a8da0e20d3dd", // replace with the desired ID
      },
      body: {
        name: "Technology",
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updateUserController(mockRequest, mockResponse);
    const responseData = mockResponse.json.mock.calls[0][0].data.dataValues;
    // Remove the 'id' field from the response data
    const {
      email,
      password,
      createdAt,
      updatedAt,
      ...responseDataWithoutId
    } = responseData;
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // Check the response data
    expect(responseDataWithoutId).toEqual({
      id: "1377454d-6df3-4395-994c-a8da0e20d3dd",
      name: "Technology",
    });
  });
});

// Delete User Controller
describe("DeletedUserController", () => {
  test("call DeleteUserController with the correct data", async () => {
    const mockRequest = {
      params: {
        id: "1377454d-6df3-4395-994c-a8da0e20d3dd", // replace with the desired ID
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await deleteUserController(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
});
