export interface User {
    id: string
    name: string
    email: string
    loginType: 'app'
    image: string | null
    birthYear?: number
    socialId: string | null
    role: 'user'
    createdAt: string
    updatedAt: string
    deletedAt: string | null
}
export interface LoginResponse {
    user: User
    token: string
}
