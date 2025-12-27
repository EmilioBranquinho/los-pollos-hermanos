import { prisma } from "../../lib/prisma"

interface FinishOrderDetails{
    order_id: string
}

class FinishOrderService{
    async execute({ order_id }: FinishOrderDetails){

        const finishedOrder = await prisma.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        });

        return finishedOrder;

    }
}

export { FinishOrderService }