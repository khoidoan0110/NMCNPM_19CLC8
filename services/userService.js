const user = require('../Model/user');
const bcrypt = require('bcrypt');

const updateInfo = async (id, newInfo) => {
    try {
        let customerEmail = await user.find({ email: newInfo.email });

        for (let i = 0; i < customerEmail.length; i++) {
            if (customerEmail[i]._id.toString() !== id) return 0;//duplicate email
        }

        await user.updateOne({ _id: id }, newInfo);
        return 1; //succcess
    } catch (err) {
        console.log(err);
    }
}

const applyForVendor= async (id) =>{
    try {
        await user.updateOne({ _id: id },{
              $set:{role: 1}
          });
        return 1; //succcess
    } catch (err) {
        console.log(err);
    }
}

const getCustomer = async (id) => {
    try {
        const customer = await user.findOne({ _id: id });
        return customer;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    updateInfo,
    getCustomer,
    applyForVendor,
}