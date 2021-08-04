const UserModel = (sequelize, Sequelize) => {
  return sequelize.define(
    "users",
    {
      name: { type: Sequelize.STRING },
      user_email: { type: Sequelize.STRING },
    },
    {
      timestamps: false,
    }
  );
};

export default UserModel;
