import Sequelize from "sequelize";
import db from "../../seq.js";
const { Op } = Sequelize;
class MessagesController {
  Messages = db.messages;
  saveMessage = async ({ fromId, toId, msg }) => {
    try {
      const res = await this.Messages.create({
        from: fromId,
        to: toId,
        msg,
        sender: fromId,
      });
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  getMessagesForUser = async (req, res) => {
    try {
      const { from, to } = req.body || {};

      const messages = await this.Messages.findAll({
        where: {
          [Op.or]: [
            {
              [Op.and]: [{ from: from},{to:to}],
            },
            {
              [Op.and]: [{ from: to},{to:from}],
            },
          ],
        },
      });
      res.send({ data: messages });
    } catch (err) {
      res.status(500).send([]);
    }
  };
}
export default new MessagesController();
