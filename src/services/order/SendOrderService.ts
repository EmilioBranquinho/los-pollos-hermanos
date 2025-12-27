import { prisma } from "../../lib/prisma";

interface SendOrderProps{
    order_id: string
}

class SendOrderService {
    async execute({ order_id }: SendOrderProps){

        const finishedOrder = await prisma.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false,
                status: false
            }
        })

        return finishedOrder;
    }

}

export { SendOrderService }