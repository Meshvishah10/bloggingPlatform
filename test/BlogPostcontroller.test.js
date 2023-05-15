import { deleteBlogPostController, getAllBlogPostController, getBlogPostController, updateBlogPostController } from "../src/controller/blogPost.controller";
import { createBlogPostController } from "../src/controller/blogPost.controller";
import { jest } from "@jest/globals";

// BlogPost Create Controller Test
describe("BlogPostController", () => {
  test("call createBlogPostController with the correct data", async () => {
  const mockRequest = {
    body: {
      heading: "Test Heading",
      sub_heading: "Test sub-heading",
      detail: "Test detail",
    },
  };

  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await createBlogPostController(mockRequest, mockResponse);
  const responseData = mockResponse.json.mock.calls[0][0].data.dataValues;
  // Remove the 'id' field from the response data
  const { id,createdAt,updatedAt ,  ...responseDataWithoutId } = responseData;
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // Check the response data
   expect(responseDataWithoutId).toEqual({
     heading: "Test Heading",
     sub_heading: "Test sub-heading",
     detail: "Test detail",
   }); 
  });
});

//BlogPost get Controller Test

describe("GetBlogPostController", () => {
  test("call GetBlogPostController with the correct data", async () => {
    const mockRequest = {
      params: {
        id: "512f4da9-3f67-4b3c-9809-30248522368e", // replace with the desired ID
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getBlogPostController(mockRequest, mockResponse);
    const responseData = mockResponse.json.mock.calls[0][0].data.dataValues;
    // Remove the 'id' field from the response data
    const { detail,heading,sub_heading, createdAt, updatedAt, ...responseDataWithoutId } = responseData;
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // Check the response data
     expect(responseDataWithoutId).toEqual({
       id: "512f4da9-3f67-4b3c-9809-30248522368e",
     });
  });
});


//Updated Blog Post Controller
describe("UpdatedBlogPostController", () => {
  test("call UpdateBlogPostController with the correct data", async () => {
    const mockRequest = {
      params: {
        id: "512f4da9-3f67-4b3c-9809-30248522368e", // replace with the desired ID
      },
      body: {
        heading: "Technology",
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updateBlogPostController(mockRequest, mockResponse);
    const responseData = mockResponse.json.mock.calls[0][0].data.dataValues;
    // Remove the 'id' field from the response data
    const {
      detail,
      sub_heading,
      createdAt,
      updatedAt,
      ...responseDataWithoutId
    } = responseData;
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    // Check the response data
    expect(responseDataWithoutId).toEqual({
      id: "512f4da9-3f67-4b3c-9809-30248522368e",
      heading: "Technology",
    });
  });
});




//Delete BlogPost Controller 
describe("DeletedBlogPostController", () => {
  test("call DeleteBlogPostController with the correct data", async () => {
    const mockRequest = {
      params: {
        id: "99b3a875-33a7-49da-9ab6-176f5092d648", // replace with the desired ID
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await deleteBlogPostController(mockRequest, mockResponse); 
    expect(mockResponse.status).toHaveBeenCalledWith(200);

  });
});
