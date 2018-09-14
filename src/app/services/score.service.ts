import { Score } from "../models/scores.model";

export class ScoreService {
    private scores: Score[] = [];

    addScore(score: Score) {
        this.scores.push(score);
    }

    getScores() {
        return this.scores.slice();
    }
}