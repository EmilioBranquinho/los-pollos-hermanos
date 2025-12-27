import { prisma } from "../../lib/prisma"

interface DetailOrderProps{
    order_id: string
}

class DetailOrderService {
    async execute({ order_id }: DetailOrderProps){

        const OrderDetails = await prisma.orderItem.findMany({
            where: {
                orderId: order_id
            },
            include: {
                product: true,
                order: true
            }
        })

        if(!OrderDetails){
            throw new Error("Error, the order doesn't exists")
        }

        return OrderDetails;
    }
}

export { DetailOrderService }