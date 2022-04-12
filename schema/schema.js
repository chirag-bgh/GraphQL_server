const { buildSchema } = require("graphql");
const schema = buildSchema(`
	type Query {
		user: User
	}
	type User {
		name: String,
		age: Int
	}
`);

const root = {
	user: () => {
		return { name: "Chirag", age: 19 };
	},
};

module.exports = { schema, root };
