# Performance Massage Staff members API
This is a bare bones Apollo GraphQL API used to query staff member data stored in a firebase realtime db.

## Install

    npm i

## Run the app

    npm run start

## Run the tests

    npm run test

# GraphQL API

This GraphQL API can use the examples as described below.

## API Schema

    type StaffMember {
        id: ID!
        firstName: String!
        lastName: String!
        preferredName: String
        dateJoined: String
        detail: String
        photo: String
        timelyId: Int
    }
    type Query {
        staffMembers: [StaffMember]
        staffMember(id: ID): StaffMember
    }

## Get list of Staff Members

### Request

    curl -i -X POST -H "Content-Type: application/json" --data '{ "query": "{ staffMembers { preferredName } }" }' http://localhost:4000/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 131
    ETag: W/"83-1Yv+6I9mLGIYBRMWpmSRhdmxtmY"
    Date: Mon, 02 Mar 2020 22:49:51 GMT
    Connection: keep-alive

    {"data":{"staffMembers":[{"preferredName":"Bex"},{"preferredName":"Chantal"},{"preferredName":"Anni"},{"preferredName":"Sarah"}]}}

## Get a specific Staff Member

### Request

    curl -i -X POST -H "Content-Type: application/json" --data '{ "query": "{ staffMember(id:1) { preferredName } }" }' http://localhost:4000/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 49
    ETag: W/"31-zwSqRhqAryXaYKO4ToJvyViYm74"
    Date: Mon, 02 Mar 2020 22:52:17 GMT
    Connection: keep-alive

    {"data":{"staffMember":{"preferredName":"Bex"}}}
