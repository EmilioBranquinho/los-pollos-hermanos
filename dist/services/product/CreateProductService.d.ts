interface ProductProps {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}
declare class CreateProductService {
    execute({ name, price, description, banner, category_id }: ProductProps): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        description: string;
        banner: string;
        categoryId: string;
    }>;
}
export { CreateProductService };
//# sourceMappingURL=CreateProductService.d.ts.map