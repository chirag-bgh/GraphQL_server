const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const { schema, root} = require("./schema/schema");

app.listen(
	3000,
	() => console.log("server is running")
);

app.use(
	"/graphql", graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);
