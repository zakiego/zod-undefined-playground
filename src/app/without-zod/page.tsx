/* eslint-disable @next/next/no-img-element */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const getData = async () => {
  const resp = await fetch("https://dummyjson.com/products?limit=5").then(
    (res) => res.json(),
  );

  return resp;
};

export default async function Home() {
  const data = await getData();

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
          {data.products.map(
            (
              product, // strict mode set to false, so no error here
            ) => (
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
                    <span className="font-semibold">Price:</span> $
                    {product.cost}
                  </p>
                  <code className="text-xs bg-red-100 text-red-600 p-2 mt-2 rounded-md">
                    {"Price: {product.cost}"}
                  </code>
                  <div className="text-xs bg-red-100 text-red-600 p-2 mt-2 rounded-md">
                    {
                      "It uses the wrong key `cost`, it should be `price`. The value of `cost` is undefined, so it will show as `Price: $undefined`. No error will be thrown. However, you need to throw an error if the key is not found"
                    }
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </CardContent>
    </Card>
  );
}
