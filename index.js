const exportFunctionAssign = require('./ModuleExports/exportFunctionAssign');
const exportFunctionDirect = require('./ModuleExports/exportFunctionDirect');
const exportFunctionDirectSingleMethod = require('./ModuleExports/exportFunctionDirectSingleMethod');
const exportFunctionAsAClass = require('./ModuleExports/exportFunctionAsAClass');
const exportClassConstructor = require('./ModuleExports/exportClassConstructor');
const exportsOnlyShorthand = require('./ModuleExports/exportsOnlyShorthand');
const exportClassComplete = require('./ModuleExports/exportClassComplete').TreasureIsland;
const moduleExportsDifference = require('./ModuleExports/moduleExportsDifference');

// Methods initialized first, assigned to module.exports later.
let exportFunctionResponse = exportFunctionAssign.exportMethod("SpaceX");
console.log('ExportFunctionAssign Response. ' + exportFunctionResponse.name);

// Methods assigned directly inside module.exports
let exportFunctionDirectResponse = exportFunctionDirect.SuperSonicBoom("Mach 21");
console.log('ExportFunctionDirect Response. ' + exportFunctionDirectResponse.Mach);

// Single method assigned directly inside module.exports
let exportFunctionDirectSingleResponse = exportFunctionDirectSingleMethod("LiftOff");
console.log('ExportFunctionDirect Response. ' + exportFunctionDirectSingleResponse.Ignition);

// Export a function as a class
let exportFunctionAsAClassInstance = new exportFunctionAsAClass("Aventador", "Hypercar");
console.log('ExportFunctionAsAClass Response. ' + exportFunctionAsAClassInstance.fullSpecs());

// using old-school class contructor invocation
let exportClass = new exportClassConstructor("Boring Company");
console.log(exportClass.name);

// exports shorthand
let exportsOnlyShorthandResponse = exportsOnlyShorthand.exportsOnlyMethod("NearaLink");
console.log('ExportsOnlyShorthand. Name: ' + exportsOnlyShorthandResponse.name);

// Exports using new ES6 class
var treasureIsland = new exportClassComplete();
treasureIsland.coast = 'Baker\'s current';
let coastName = treasureIsland.coast;
treasureIsland.masterOfTreasures('Cap\'n Barbarossa');

// Difference between module.exports and exports


console.log(module.filename);
console.log(module.id);
console.log(module.exports);