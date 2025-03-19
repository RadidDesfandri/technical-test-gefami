"use client";

import Button from "@/components/Button";
import { useGetDataJson } from "@/hooks/useGetDataJson";
import Link from "next/link";
import { useEffect, useState } from "react";

const JsonIndex = () => {
  const { data, isLoading, handleDelete } = useGetDataJson();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!isClient) return null;

  // 4. Buatlah 1 html dengan mencetak hasil response dari soal no 3 ke dalam bentuk table.
  return (
    <div className="p-4 max-w-6xl">
      <Link href={"/"} className="mb-6 block rounded-lg">
        Back
      </Link>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Body</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => (
            <tr key={data.id}>
              <td className="border p-2">{data.id}</td>
              <td className="border p-2">{data.title}</td>
              <td className="border p-2">{data.body}</td>
              <td className="border p-2">
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JsonIndex;
