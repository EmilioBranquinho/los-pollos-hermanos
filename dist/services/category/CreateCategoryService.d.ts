declare class CreateCategoryService {
    execute(name: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { CreateCategoryService };
//# sourceMappingURL=CreateCategoryService.d.ts.map