/* eslint-disable @next/next/no-img-element */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/ui/navbar";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const getData = async () => {
  const resp = await fetch("https://dummyjson.com/products?limit=5").then(
    (res) => res.json(),
  );

  const schema = z.object({
    products: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        cost: z.number(), // should be `price` instead of `cost`
        discountPercentage: z.number(),
        rating: z.number(),
        stock: z.number(),
        brand: z.string(),
        category: z.string(),
        thumbnail: z.string(),
        images: z.array(z.string()),
      }),
    ),
    total: z.number(),
    skip: z.number(),
    limit: z.number(),
  });

  const parsedData = schema.safeParse(resp);

  if (!parsedData.success) {
    const readable = fromZodError(parsedData.error);
    return {
      error: parsedData.error,
      readableError: readable.toString(),
    };
  }

  return {
    data: parsedData.data,
  };
};

export default async function Home() {
  const { data, error, readableError } = await getData();

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-red-600 font-semibold mt-4">
            This is error format with{" "}
            <a
              href="https://www.npmjs.com/package/zod-validation-error"
              className="underline font-semibold"
            >
              zod-validation-error
            </a>
          </h1>
          <pre className="mt-2 bg-red-100 p-4 rounded-md text-red-600 font-semibold whitespace-normal">
            {JSON.stringify(readableError, null, 2)}
          </pre>

          <h1 className="text-red-600 font-semibold">
            Original error from{" "}
            <a href="https://zod.dev/" className="underline font-semibold">
              zod
            </a>
          </h1>
          <pre className="mt-2 bg-red-100 p-4 rounded-md text-red-600 font-semibold">
            {JSON.stringify(error, null, 2)}
          </pre>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <p className="font-bold mt-4 text-gray-800">
                  <span className="font-semibold">Price:</span> ${product.cost}
                </p>
                <div className="text-xs bg-red-100 text-red-600 p-2 mt-2 rounded-md">
                  {"It should be a `price` but it's a `cost` in the code."}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
