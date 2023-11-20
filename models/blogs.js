module.exports  = (sequelize,Sequelize) => {
    const Blogs = sequelize.define("blogs",{
        title: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.STRING,
        },
        published: {
            type: Sequelize.BOOLEAN,
        }
    }

    );
    return Blogs;
    
}