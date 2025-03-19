/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

interface ResponseType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const useGetDataJson = () => {
  const [data, setData] = useState<ResponseType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://jsonplaceholder.typicode.com/posts",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        // 4. ..., Tampilkan maksimal 10 data.
        // 6. Hapuslah salah satu key dari object pada json response soal no 4.
        const limitedData = json
          .slice(0, 10)
          .map(({ userId, ...rest }: any) => rest);

        setData(limitedData);
      } catch (error) {
        console.log("Something went wrong!", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // 5. Buatlah 1 function untuk menghapus salah satu data pada soal no 4.
  const handleDelete = (id: number) => {
    setData((prev) => prev?.filter((data) => data.id !== id));
  };

  return { data, isLoading, setData, handleDelete };
};
