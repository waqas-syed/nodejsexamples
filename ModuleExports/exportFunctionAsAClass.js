module.exports = function(ride, category){
    this.ride = ride;
    this.category = category;
    this.fullSpecs = function(){
        return this.ride + ' ' + this.category; 
    }
}