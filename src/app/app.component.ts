import { Component, OnInit } from '@angular/core';
import { CountdownService } from './services/countdown.service';
import { ColorsService } from './services/colors.service';
import { ScoreService } from './services/score.service';
import { Score } from './models/scores.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CountdownService, ColorsService, ScoreService]
})
export class AppComponent implements OnInit {
    title = 'Brain Training';
    private score: boolean[] = [];
    private level: number = 0;
    isBntStartVisible: boolean;    
    randomColor: { index: number, color: string };
    randomName: { index: number, name: string };
    countdownNumber: number;
    

    constructor (private countdownService :CountdownService, 
                 private colorsService :ColorsService,
                 private scoreService :ScoreService) { }

    ngOnInit(): void {
        this.countdownNumber = 0;
        this.randomName =  { index: -1, name: ' . ' };
        this.isBntStartVisible = true;
        this.countdownService.tick.subscribe(tickNumber => this.countdownNumber = tickNumber);
        this.countdownService.finish.subscribe(tickNumber => {
            this.isBntStartVisible = true;
            this.scoreService.addScore(
                new Score(++this.level, 
                this.score.filter(x => x).length,
                this.score.filter(x => !x).length));
        });
    }

    private getRandomIndex(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    private getRandomBoolean() {
        return Math.random() >= 0.5;
    }
    private generateRandom() {
        const colors = this.colorsService.getColors();
        let rColorIndex = this.getRandomIndex(colors.length);
        let rNameIndex = 0;

        if (this.getRandomBoolean()) {
            rNameIndex = rColorIndex;
        } else {
            rNameIndex = this.getRandomIndex(colors.length);
        }

        this.randomColor = { index: rColorIndex, color: colors[rColorIndex] };
        this.randomName = { index: rNameIndex, name: colors[rNameIndex] };
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

    getScores() {
        return this.scoreService.getScores();
    }
}
