import { verify } from "jsonwebtoken"
export const verifyToken = async(sid: string) => {
    if (process.env.NEXT_PUBLIC_JWT_SECRET) {
        const token = verify(sid, process.env.NEXT_PUBLIC_JWT_SECRET)
        return token
    } else {
        return null
    }
}