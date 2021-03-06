/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./module.ts"/>
/// <reference path="./model-wrapper.ts"/>

module AngularSmarterModels {
  export interface ModelInstanceConfig {
    rawModel: any,
    modelPath: string,
    modelDataRetriever: ModelDataRetriever,
    listPath: string,
    idField: string,
  }

  export class ModelInstance implements ModelWrapper {
    constructor(public config:ModelInstanceConfig) {
      if (!angular.isObject(this.config.rawModel)) {
        this.config.rawModel = {};
      }
    }

    get props() {
      return this.config.rawModel;
    }

    serialize():string {
      return JSON.stringify(this.config.rawModel);
    }

    merge(src):void {
      angular.extend(this.config.rawModel, src);
    }

    setModelPath(path):void {
      this.config.modelPath = path;
    }

    getModelPath():string {
      return this.config.modelPath;
    }

    save():ng.IPromise<void> {
      return this.config.modelDataRetriever.save(this);
    }

    delete():ng.IPromise<void> {
      return this.config.modelDataRetriever.delete(this.config.modelPath, this.config.listPath, this.config.idField);
    }
  }

  smModule.value('SMModelInstance', ModelInstance);
}
