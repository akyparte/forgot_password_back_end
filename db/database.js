const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
   'forgot_password',
   'root',
   'root',
   {
      host: 'localhost',
      dialect: 'mysql'
   }
);



(async function (params) {

   try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.');

   } catch (error) {
      console.error('Unable to connect to the database: ', error);

   }
})()


const User = sequelize.define("user", {
   username: DataTypes.TEXT,
   password: DataTypes.TEXT,
   email: DataTypes.TEXT,
});

(async function () {
   try{
      await sequelize.sync();
      console.log('table created');
   }catch(err){
       console.log(err);
       console.log('error occured');
   }
})();


exports.User = User;


