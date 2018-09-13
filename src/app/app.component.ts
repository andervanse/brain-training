import { Component, OnInit } from '@angular/core';
import { CountdownService } from './services/countdown.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CountdownService]
})
export class AppComponent implements OnInit {

    title = 'Brain Training';
    private colors: string[] = ['green', 'yellow', 'blue'];
    private names: string[] = ['green', 'yellow', 'blue'];
    private score: boolean[] = [];
    isBntStartVisible: boolean;    
    randomColor: { index: number, color: string };
    randomName: { index: number, name: string };
    countdownNumber: number;

    constructor (private countdownService :CountdownService) { }

    ngOnInit(): void {
        this.isBntStartVisible = true;
        this.countdownService.tick.subscribe(tickNumber => this.countdownNumber = tickNumber);
        this.countdownService.finish.subscribe(tickNumber => {
            this.isBntStartVisible = true;
        });
    }

    private getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    private generateRandom() {
        let rColorIdx = this.getRandomInt(this.colors.length);
        let rNameIdx = this.getRandomInt(this.names.length);
        this.randomColor = { index: rColorIdx, color: this.colors[rColorIdx] };
        this.randomName = { index: rNameIdx, name: this.names[rNameIdx] };
    }

    onStart() {
        this.isBntStartVisible = false;
        this.generateRandom();
        this.score = [];
        this.countdownNumber = 10;
        this.countdownService.start(1000, this.countdownNumber);
    }

    onTrue() {
        this.score.push(this.randomColor.index === this.randomName.index);
        this.generateRandom();
    }

    onFalse() {
        this.score.push(!(this.randomColor.index === this.randomName.index));
        this.generateRandom();
    }

    getTotalCorrect() {
        return this.score.filter(x => x).length;
    }

    getTotalWrong() {
        return this.score.filter(x => !x).length;
    }
}
