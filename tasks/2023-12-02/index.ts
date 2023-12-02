class ChristmasQueue<T> {
    private items: { value: T, priority: number }[];
    constructor() {
        this.items = [];
    }

    enqueue(item: T, priority: number) {
        this.items.push({value: item, priority: priority});
        this.items.sort((a, b) => b.priority - a.priority);
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('There are no letters in the queue!');
        }
        return this.items.shift()!.value;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
export { ChristmasQueue };