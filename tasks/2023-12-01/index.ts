interface Gift {
    id: number;
    childId: number;
    name: string;
}

export class GiftRegistry {
    private data: Gift[] = [];

    addGift(childId: Gift['childId'], name: Gift['name']): void {
        const id = this.generateId();
        this.data.push({ id, childId, name });
    }

    getGiftsForChild(id: Gift['childId']): string[] {
        return this.data.filter(gift => gift.childId === id).map(gift => gift.name);
    }

    removeGift(childId: Gift['childId'], name: Gift['name']): void {
        const initialDataLength = this.data.length;
        this.data = this.data.filter(gift => gift.childId !== childId || gift.name !== name);

        if (this.data.length === initialDataLength) {
            throw new Error('Gift not found');
        }
    }

    private generateId(): number {
        return this.data.length;
    }
}