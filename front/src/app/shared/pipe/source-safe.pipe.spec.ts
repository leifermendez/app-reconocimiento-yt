import { SourceSafePipe } from './source-safe.pipe';

describe('SourceSafePipe', () => {
  it('create an instance', () => {
    const pipe = new SourceSafePipe();
    expect(pipe).toBeTruthy();
  });
});
