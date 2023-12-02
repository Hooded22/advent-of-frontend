
interface Gift {
    id: number;
    childId: number;
    name: string;
}

export class GiftRegistry {
    data: Gift[] = []

    addGift(childId: Gift['childId'], name: Gift['name']) {
        this.data.push({id: this.generateId(), childId, name})
    }

    getGiftsForChild(id: Gift['childId']) {
        const gifts = this.data.filter(giftItem => giftItem.childId === id);

        if(!gifts) {
            throw new Error('Gift not found')
        }

        return gifts.map(gift => gift.name)
    }

    removeGift(childId: Gift['childId'], name: Gift['name']) {
        const giftToDelete = this.data.find(item => item.childId === childId && item.name === name);

        if(!giftToDelete) {
            throw new Error('Gift not found')
        }

        this.data = this.data.filter(item => item.id !== giftToDelete.id)
    }

    private generateId() {
        return this.data.length === 0 ? 0 : this.data.length + 1
    }
}