export class ColorsService {
    private colors: string[] = ['green', 'yellow', 'blue', 'black', 'pink', 'orange'];

    getColors() {
        return this.colors.slice();
    }
}