interface CreateUserData {
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ name, email, password }: CreateUserData): Promise<any>;
}
export { CreateUserService };
//# sourceMappingURL=createUserService.d.ts.map