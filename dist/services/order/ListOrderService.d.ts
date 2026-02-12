declare class ListOrderService {
    execute(): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        status: boolean;
        draft: boolean;
    }[]>;
}
export { ListOrderService };
//# sourceMappingURL=ListOrderService.d.ts.map