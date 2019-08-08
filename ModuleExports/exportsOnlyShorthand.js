const exportsOnlyMethod = function(incoming) {
    console.log('Represents shothand only form of exporting');
    return { name: incoming };
}

exports.exportsOnlyMethod = exportsOnlyMethod;