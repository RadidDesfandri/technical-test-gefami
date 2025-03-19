import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

interface DataType {
  id: number;
  email: string;
  username: string;
}

const validateHeaders = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.header("User-id");
  const scope = req.header("Scope");

  if (userId !== "ifabula" || scope !== "user") {
    res.status(401).json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
    return;
  }

  next();
};

const getData = () => {
  const rawData = fs.readFileSync("./data.json", "utf-8");
  return JSON.parse(rawData);
};

const saveData = (data: DataType[]) => {
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
};

app.get("/data", validateHeaders, (req: Request, res: Response) => {
  const data = getData();
  res.json({ data, status: 200 });
});

app.post("/data", validateHeaders, (req: Request, res: Response) => {
  const newData = req.body;
  const data = getData();

  const lastId = data.length > 0 ? data[data.length - 1].id : -1;
  const id = lastId + 1;

  const newEntry = {
    id,
    ...newData,
  };

  data.push(newEntry);

  saveData(data);

  res.json({ msg: "Data added successfully" });
});

app.patch("/data/:id", validateHeaders, (req: Request, res: Response) => {
  const data = getData();
  const id = parseInt(req.params.id);
  const updatedData = req.body;

  const index = data.findIndex((item: DataType) => item.id === id);

  if (index === -1) {
    res.status(404).json({
      msg: "Data not found",
    });
  }

  data[index] = { ...data[index], ...updatedData };

  saveData(data);

  res.json({ msg: "Data updated sucessfully" });
});

app.delete("/data/:id", validateHeaders, (req: Request, res: Response) => {
  let data = getData();
  const id = parseInt(req.params.id);

  const filterData = data.filter((item: DataType) => item.id !== id);
  if (filterData.length === data.length) {
    res.status(404).json({
      msg: "Data not found",
    });
  }

  saveData(filterData);

  res.json({ msg: "Data deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
