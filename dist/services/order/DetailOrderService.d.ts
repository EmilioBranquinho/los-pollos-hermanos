interface DetailOrderProps {
    order_id: string;
}
declare class DetailOrderService {
    execute({ order_id }: DetailOrderProps): Promise<({
        product: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: number;
            description: string;
            banner: string;
            categoryId: string;
        };
        order: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            table: number;
            status: boolean;
            draft: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        amount: number;
        orderId: string;
        productId: string;
    })[]>;
}
export { DetailOrderService };
//# sourceMappingURL=DetailOrderService.d.ts.map