const UserSchema = {
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
};

module.exports = UserSchema;
