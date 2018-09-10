import { BrainTrainingPage } from './app.po';

describe('brain-training App', () => {
  let page: BrainTrainingPage;

  beforeEach(() => {
    page = new BrainTrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
