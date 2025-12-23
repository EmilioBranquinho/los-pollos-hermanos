import { prisma } from "../../lib/prisma";

interface RemoveItemProps {
    item_id: string
}

class RemoveItemService {
    async execute({ item_id }: RemoveItemProps){

        const removedItem = await prisma.orderItem.delete({
            where: {
                id: item_id
            }
        })

        return removedItem;

    }
}

export { RemoveItemService }