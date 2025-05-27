module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(765),
        allowNull: false
      },
      profession: {
        type: DataTypes.STRING(765),
        allowNull: true
      },
      avatar: {
        type: DataTypes.STRING(765),
        allowNull: true
      },
      role: {
        type: DataTypes.CHAR(24),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(765),
        allowNull: false,
        unique: true
      },
      jobdesc: {
        type: DataTypes.STRING(765),
        allowNull: true
      },
      pass: {
        type: DataTypes.STRING(765),
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      tableName: 'users',
      timestamps: false,
      underscored: true
    });
  
    return User;
  };
  