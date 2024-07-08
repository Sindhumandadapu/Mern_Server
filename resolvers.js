const User = require('./model/userSchema');

const resolvers = {
    Query: {
        getUsers: async (_, { id }) => {
            return await User.findById(id);
        }
       
    },
    Mutation: {
        createUser: async (_, { input }) => {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new Error('Enter all the fields');
                }
                const newUser = new User({ name, email, password });
                return await newUser.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        changepass: async (_, { id, password }) => {
            try {
                const user = await User.findByIdAndUpdate(id, { password }, { new: true });
                if (!user) {
                    throw new Error('User not found');
                }
                return user;
            } catch (err) {
                throw new Error(err);
            }
        },
    },
    User: {
        email: (parent) => parent.email || ' ',
        name: (parent) => parent.name || ' ',
        password: (parent) => parent.password || ' ',
    },
};

module.exports = resolvers;