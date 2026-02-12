interface OrderRequest {
    order_id: string;
}
declare class RemoveOrderService {
    execute({ order_id }: OrderRequest): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { RemoveOrderService };
//# sourceMappingURL=RemoveOrderService.d.ts.map