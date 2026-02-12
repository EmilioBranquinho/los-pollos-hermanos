interface AddItemProps {
    amount: number;
    orderId: string;
    productId: string;
}
declare class AddItemService {
    execute({ amount, orderId, productId }: AddItemProps): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        amount: number;
        orderId: string;
        productId: string;
    }>;
}
export { AddItemService };
//# sourceMappingURL=AddItemService.d.ts.map