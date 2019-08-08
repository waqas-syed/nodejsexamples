const oldSchoolExport = { name: "Giovanni", product: "Suit" };

function ExportClass(incoming) {
    console.log('ExportClass invoked. Incoming: ' + incoming);
    this.name = incoming;
}

// Exporting this way, we can directly access the class using the statement require('module');
module.exports = ExportClass;

/*
    // Another way of exporting as a property, need to access this property to get the class, e.g., require('module').ExportClass
    module.exports = {
        ExportClass: ExportClass
    }

    // Equivalent to the above there is another way, this will also require us to use require('module').ExportClass:
    module.exports.ExportClass = ExportClass;
*/
