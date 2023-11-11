import createContainer from './main';

describe('createContainer', () => {
  it('should be a function', () => {
    expect(createContainer).toBeInstanceOf(Function);
  })

  it('should create container', () => {
    const container = createContainer('test');
    expect(container).toBeTruthy();
    expect(container.id).toBe('test');
  })
})