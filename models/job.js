var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
	keyword: String,
    title: String,
    companyName: String,
    location: {type: String, required: true},
    meta: {
        contactPerson: String,
        contactEmail: String,

    }
  

});

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;