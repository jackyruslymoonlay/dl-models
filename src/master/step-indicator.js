'use strict';

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class StepIndicator extends BaseModel{
    constructor(source){
        super('step-indicator', '1.0.0');
        this.name = '';
        this.value = '';
        this.uomId = null;
        this.uom = null;
        this.copy(source);
    }
};