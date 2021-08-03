import db from "../../seq.js";

class UserController {
  User = db.user;

  get = async (req, res) => {
    try {
      const users = await this.User.findAll({});
      res.send({ data: users });
    } catch (err) {
      res.send([]);
    }
  };
  registerUser = async (req, res) => {
    try {
      const { email, name } = req.body || {};

      const users = await this.User.findAll({
        where: {
          user_email: email,
        },
      });

      if (!users?.length) {
        const user = await this.User.create({
          name: name,
          user_email: email,
        });
        return res.send({ id: user.id });
      }
      res.send({ id: users[0].id });
    } catch (err) {}
  };
}

export default new UserController();
