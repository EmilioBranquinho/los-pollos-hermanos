interface CreateOrderRequest {
    table: number;
    name: string;
}
declare class CreateOrderService {
    execute({ table, name }: CreateOrderRequest): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { CreateOrderService };
//# sourceMappingURL=CreateOrderService.d.ts.map