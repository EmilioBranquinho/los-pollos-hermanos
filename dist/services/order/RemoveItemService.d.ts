interface RemoveItemProps {
    item_id: string;
}
declare class RemoveItemService {
    execute({ item_id }: RemoveItemProps): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        amount: number;
        orderId: string;
        productId: string;
    }>;
}
export { RemoveItemService };
//# sourceMappingURL=RemoveItemService.d.ts.map