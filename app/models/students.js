module.exports = function(sequelize, DataTypes) {

  var Students = sequelize.define("students", {

    id: {type: DataTypes.INTEGER, primaryKey: true},
    student_Id: {type: DataTypes.STRING, allowNull: false, unique: true,},

    student_Email: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},

    
    student_Name: {type: DataTypes.STRING, allowNull: false},
    student_Hour: {type: DataTypes.INTEGER(1), allowNull: false}, //min max 1-7
    student_TeacherName: {type: DataTypes.STRING, allowNull: false},

    initial_Parent: {type: DataTypes.INTEGER},

    first_Mate: {type: DataTypes.INTEGER},    
    first_Offspring: {type: DataTypes.INTEGER},
    first_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},    
    first_HuskyImage: {type: DataTypes.STRING},        
    first_createdAt: {type: DataTypes.DATE},  

    second_Mate: {type: DataTypes.INTEGER},    
    second_Offspring: {type: DataTypes.INTEGER},        
    second_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},
    second_HuskyImage: {type: DataTypes.STRING},
    second_createdAt: {type: DataTypes.DATE},  

    third_Mate: {type: DataTypes.INTEGER},    
    third_Offspring: {type: DataTypes.INTEGER},        
    third_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},
    third_HuskyImage: {type: DataTypes.STRING},     
    third_createdAt: {type: DataTypes.DATE},

    fourth_Mate: {type: DataTypes.INTEGER},    
    fourth_Offspring: {type: DataTypes.INTEGER},
    fourth_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},    
    fourth_HuskyImage: {type: DataTypes.STRING},        
    fourth_createdAt: {type: DataTypes.DATE},

    fifth_Mate: {type: DataTypes.INTEGER},    
    fifth_Offspring: {type: DataTypes.INTEGER},
    fifth_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},    
    fifth_HuskyImage: {type: DataTypes.STRING},        
    fifth_createdAt: {type: DataTypes.DATE},

    sixth_Mate: {type: DataTypes.INTEGER},    
    sixth_Offspring: {type: DataTypes.INTEGER},
    sixth_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},    
    sixth_HuskyImage: {type: DataTypes.STRING},        
    sixth_createdAt: {type: DataTypes.DATE},

    seventh_Mate: {type: DataTypes.INTEGER},    
    seventh_Offspring: {type: DataTypes.INTEGER},
    seventh_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},    
    seventh_HuskyImage: {type: DataTypes.STRING},        
    seventh_createdAt: {type: DataTypes.DATE},

    eighth_Mate: {type: DataTypes.INTEGER},    
    eighth_Offspring: {type: DataTypes.INTEGER},
    eighth_Genotype: {type: DataTypes.STRING, validate: {len: [10, 10]}},    
    eighth_HuskyImage: {type: DataTypes.STRING},        
    eighth_createdAt: {type: DataTypes.DATE},
  }, {
    timestamps: false
  });
  return Students;
};
