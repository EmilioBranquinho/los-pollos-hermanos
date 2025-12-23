import { prisma } from "../../lib/prisma"

interface AddItemProps {
    amount: number,
    orderId: string,
    productId: string
}

class AddItemService {
    async execute({ amount, orderId, productId }: AddItemProps){

        const item = await prisma.orderItem.create({
            data: {
                amount: amount,
                orderId: orderId,
                productId: productId
            }
        })

        return item;
    }
}

export { AddItemService }