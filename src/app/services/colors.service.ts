export class ColorsService {
    private colors: string[] = ['green', 'yellow', 'blue', 'black', 'pink'];

    getColors() {
        return this.colors.slice();
    }
}