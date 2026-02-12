interface FinishOrderDetails {
    order_id: string;
}
declare class FinishOrderService {
    execute({ order_id }: FinishOrderDetails): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { FinishOrderService };
//# sourceMappingURL=FinishOrderService.d.ts.map