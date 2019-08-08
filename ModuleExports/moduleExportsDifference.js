module.exports.lightningStruckOnce = function() {
    return 'Wont happen again';
}

module.exports.lightningStruckTwice = function() {
    return 'O Snap';
}

exports = 'Naadan Parinday';

// module.exports always takes priority, no matter if it is initialized before or after exports
// Read more about this