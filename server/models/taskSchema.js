const TaskSchema = {
    title: String,
    description: String,
    owner: {
        fullName: String,
        position: String,
        username: String,
        password: String,
        bio: '',
        avatar:'',
        company: {
            title: String,
            address: String
        },
        role: {
            code: String,
            caption: String
        }

    },
    reward: {
        score: Number,
        title: '',
    },
    dateEnd: Date,
    priority: {
        order: Number,
        caption: String
    }
};

module.exports = TaskSchema;
