describe('Class: ModelInstance', function() {
  beforeEach(module('sm.models'));

  beforeEach(inject(function(SMModelInstance) {
    this.testRawModel = {
      a: 1,
    };
    this.testModel = new SMModelInstance(this.testRawModel);
  }));

  describe('Property: props', function() {
    it('should be the raw model object', function() {
      expect(this.testModel.props).toBe(this.testRawModel);
    });
  });

  it('should have a serialize method that returns the model data in string form', function() {
    expect(this.testModel.serialize()).toEqual(JSON.stringify(this.testRawModel));
  });
});
