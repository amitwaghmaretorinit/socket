const MessagesModel = (sequelize, Sequelize) => {
  return sequelize.define(
    "messages",
    {
      from: { type: Sequelize.INTEGER },
      to: { type: Sequelize.INTEGER },
      msg: { type: Sequelize.STRING },
      sender: { type: Sequelize.INTEGER },
    },
    {
      timestamps: false,
    }
  );
};

export default MessagesModel;
