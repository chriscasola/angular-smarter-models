class ModelBuilder {
  constructor(route, Model, ModelInstance, modelDataRetriever) {
    this.route = route;
    this.Model = Model;
    this.ModelInstance = ModelInstance;
    this._modelDataRetriever = modelDataRetriever;
  }

  model(Model) {
    this.Model = Model;
    return this;
  }

  modelInstance(ModelInstance) {
    this.ModelInstance = ModelInstance;
    return this;
  }

  modelDataRetriever(modelDataRetriever) {
    this.modelDataRetriever = modelDataRetriever;
    return this;
  }

  done() {
    return new this.Model(this.route, this.ModelInstance, this.modelDataRetriever);
  }
}

function ModelFactory(SMModel, SMModelInstance, smModelDataRetriever) {
  return function(route) {
    return new ModelBuilder(route, SMModel, SMModelInstance, smModelDataRetriever);
  };
}

ModelFactory.$inject = ['SMModel', 'SMModelInstance', 'smModelDataRetriever'];

angular.module('sm.models').factory('smModelFactory', ModelFactory);