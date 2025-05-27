const {User} = require('../../models');

module.exports = async (req,res) => {
    const id = req.params.id;
    const email = req.body.email;
    const emailqry = req.query.email;
// berdasarka id PK
    // const users = await User.findByPk(id,{
    //     attributes:['id','name','role','profession','email','avatar','jobdesc']
    // });

// berdasarkan email POST
    // const users = await User.findOne({
    //     where: {email: emailqry}
    // });

// berdasarkan email query string
    const users = await User.findOne({
        where: {email: emailqry}
    });

    return res.status(200).json({
        status: 'sukses',
        data: users,
    })
}