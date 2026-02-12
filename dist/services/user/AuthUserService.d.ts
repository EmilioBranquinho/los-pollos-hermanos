interface AuthUserData {
    email: string;
    password: string;
}
declare class AuthUserService {
    execute({ email, password }: AuthUserData): Promise<{
        id: string;
        name: string;
        email: string;
        token: string;
    }>;
}
export { AuthUserService };
//# sourceMappingURL=AuthUserService.d.ts.map