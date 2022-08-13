import { app } from "./express/express";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server started in http://localhost:${PORT}`);
});
