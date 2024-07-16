import dotenv from "dotenv"
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is missing or malformed.",
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decode = jwt.verify(token, JWT_SECRET);

        if (decode.userId) {
            console.log(decode)
            req.userId = decode.userId;
            next();
        } else {
            return res.status(403).json({
                success: false,
                message: "Invalid token: userId is missing.",
            });
        }

    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Token verification failed.",
            error: error.message,
        });
    }

}

export default authMiddleware;
