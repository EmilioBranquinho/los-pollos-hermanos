import { prisma } from "../../lib/prisma";


class ListOrderService {
    async execute(){

        const orders = await prisma.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return orders;
    }
}

export { ListOrderService }