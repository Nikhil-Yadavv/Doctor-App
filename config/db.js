const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/DoctorAppointment', {
}).then(() => {
    console.log("Connection success");
}).catch((e) => {
    console.log(e);
})