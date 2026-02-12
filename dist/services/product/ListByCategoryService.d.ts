declare class ListByCategoryService {
    execute(categoryId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        description: string;
        banner: string;
        categoryId: string;
    }[]>;
}
export { ListByCategoryService };
//# sourceMappingURL=ListByCategoryService.d.ts.map