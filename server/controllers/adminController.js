const Admin= require("../models/adminModel");


const createAdmin = (req,res) => {
   try {
     const admin = Admin.create(req.body);
		res.status(201).json({
			succeeded: true,
			admin,
		});
   } catch (error) {
       res.status(500).json({
           succeeded: true,
           error
		});
   }
};

module.exports = createAdmin;