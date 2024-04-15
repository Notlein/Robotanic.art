const { query, Client } = require('faunadb');

// Initialize the FaunaDB client with your secret key
const client = new Client({
    secret: 'fnAFfEyGXEAAQDAD1ZeCtCf3DykcOsgY-CcL2SZ4'
});

exports.handler = async function(event, context) {
    try {
        // Fetch all documents from the 'chat_history' collection
        const results = await client.query(
            query.Map(
                query.Paginate(query.Documents(query.Collection('chat_history'))),
                query.Lambda('X', query.Get(query.Var('X')))
            )
        );

        // Format and return the data as JSON
        return {
            statusCode: 200,
            body: JSON.stringify(results.data.map(item => item.data))
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data' })
        };
    }
};
