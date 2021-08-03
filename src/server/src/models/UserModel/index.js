const UserModel = (sequelize, Sequelize) => {
  return sequelize.define(
    "users",
    {
      // ID: {type: sequelize.INTEGER, key: 'ID', primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING },
      user_email: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
    }
  );
};

export default UserModel;
