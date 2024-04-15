const { query, Client } = require('faunadb');

const client = new Client({
    secret: 'fnAFfEyGXEAAQDAD1ZeCtCf3DykcOsgY-CcL2SZ4'
});

exports.handler = async function(event, context) {
    const { request, response, toxicity } = JSON.parse(event.body);

    // Storing data into FaunaDB
    const result = await client.query(
        query.Create(
            query.Collection('chat_history'),
            { data: { request, response, toxicity } }
        )
    );

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Data stored successfully", id: result.ref.id })
    };
};
