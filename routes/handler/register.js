const bcrypt = require('bcrypt');
const {User} = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res)=>{
    const schema = {
        name: 'string|empty:false',
        profession: 'string|optional',
        avatar: 'string|optional',
        role: 'string|empty:false',
        email: 'string|empty:false',
        jobdesc: 'string|optional',
        pass: 'string|min:6'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res.status(200).json(
            {
                status:'error',
                message:validate
            });
    }

    const user = await User.findOne(
        {
            where: {email:req.body.email},
            attributes: ['id','name','email']
        }
    );

    if (user){
        return res.status(200).json({
            status:'error',
            message:'email already exist'
        });
    }

    const password = await bcrypt.hash(req.body.pass,10);

    const data = {
        name: req.body.name,
        profession: req.body.profession,
        avatar: req.body.avatar,
        role: req.body.role,
        email: req.body.email,
        jobdesc: req.body.jobdesc,
        pass: password
    }

    const createdUser = await User.create(data);

    return res.json({
        status:'berhasil',
        data:{
            id:createdUser.id,
            name:createdUser.name
        }
    });
}