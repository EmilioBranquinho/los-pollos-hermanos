import { prisma } from "../../lib/prisma";

interface OrderRequest {
    order_id: string;
}

class RemoveOrderService {
   async execute({ order_id }: OrderRequest){

    const removedOrder = await prisma.order.delete({
        where: {
            id: order_id
        }
    })

    return Response.json(removedOrder);
   } 
}

export { RemoveOrderService }