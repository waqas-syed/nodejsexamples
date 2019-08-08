const exportVariable = { name: "Tesla", Field: "Automobiles"};

const exportMethod = function(input){
    console.log('ExportMethod invoked. Input: ' + input);
    return { name: input };
}

module.exports.exportVariable = exportVariable;
module.exports.exportMethod = exportMethod;