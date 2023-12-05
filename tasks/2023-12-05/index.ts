export class ChristmasEmitter {
    private events: { [key: string]: Function[] } = {};

    on(event: string, callback: Function): void {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    off(event: string, callback: Function): void {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(subscriber => subscriber !== callback);
    }

    emit(event: string): void {
        if (!this.events[event]) return;
        this.events[event].forEach(subscriber => subscriber());
    }
}