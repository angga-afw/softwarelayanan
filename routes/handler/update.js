const bcrypt = require('bcrypt');
const {User} = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req,res) => {
    const schema = {
        name: "string|empty:false",
        email: "email|empty:false",
        pass: "string|min:6",
        profession: "string|optional",
        avatar: "string|optional",
        jobdesc: "string|empty:false",
        role: "string|empty:false",
        };

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(200).json({
            status: "error",
            message: validate,
        });
    }

    const id = req.params.id;
    const user = await User.findByPk(id);

    if (!user) {
        return res.status(200).json({
            status: "error",
            message: "User not found",
        });
    }

    const email = req.body.email;

    if (email) {
        const checkEmail = await User.findOne({
        where: { email }
    });
    if (checkEmail && email !== user.email) {
        return res.status(200).json({
            status: "error",
            message: "email already exist"
        });
        }
    }

    const passwd = await bcrypt.hash(req.body.pass,10);

    const {
        name, profession, avatar, jobdesc, role
    } = req.body;

    await user.update({
        email, profession, avatar, pass:passwd, name, jobdesc, role
    });

    return res.status(200).json({
        status: "success",
        message: {
            id: user.id,
            name, email, profession, avatar, jobdesc, role
        }
        });
}