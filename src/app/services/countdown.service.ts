import { EventEmitter } from "@angular/core";

export class CountdownService {
    
    tick = new EventEmitter<any>();
    finish = new EventEmitter<any>();

    start(interval :number, tickNumber :number) {

        var x = setInterval(() => {
            tickNumber--;
            this.tick.emit(tickNumber);

            if (tickNumber <= 0) {
                clearInterval(x);
                this.finish.emit(tickNumber);
            }
        }, interval);
    }
}