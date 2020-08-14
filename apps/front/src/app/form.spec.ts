import { Form } from './form';

describe('Form', () => {
  it('should create an instance', () => {
    expect(new Form({
      submit: null,
      controls: [],
      model: {}
    })).toBeTruthy();
  });
});
