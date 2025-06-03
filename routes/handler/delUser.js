const {User} = require('../../models');

module.exports = async (req, res) => {
    const id = req.params.id;

    const user = await User.findByPk(id,{
        attributes:['id','name','role','profession','avatar']
    });

    if(!user){
        return res.status(200).json({
            status:'Error',
            message:'User not found',
        });
    }else{
        await user.destroy();
    }

    const userAll = {
        attributes: ['id','name','role','profession'
        ,'jobdesc','email']
    }

    const users = await User.findAll(userAll);

    return res.status(200).json({
        status: 'success',
        data: users
    });
}