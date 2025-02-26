import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import referralRoutes from "./src/routes/referral.routes.js";
import path from "path"

const __dirname = path.resolve();

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/referrals", referralRoutes);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname ,'../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
    });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
