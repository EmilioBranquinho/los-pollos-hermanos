interface SendOrderProps {
    order_id: string;
}
declare class SendOrderService {
    execute({ order_id }: SendOrderProps): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { SendOrderService };
//# sourceMappingURL=SendOrderService.d.ts.map