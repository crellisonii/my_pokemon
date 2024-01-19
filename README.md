# My-Pokemon (in progress)

A project for Pokemon fans.

## Technologies used

### Backend

- Nodejs
- Express
- Typescript
- GraphQL
- Type-GraphQL
- Axios
- MongoDB
- Mongoose
- Jest

### Frontend

- Angular
- (TODO)

## Steps to run Backend

1. Clone the repo.
2. Head one folder into the repo
3. Run `npm run server`
4. Open your browser and navigate to [localhost:4000/graphql]
5. This should open up the ApolloGraphql sandbox explorer
   ![Alt text](<Screenshot 2024-01-18 at 22.58.55.png>)
6. To test the pokemon api, click the &oplus; in front of `query`
7. You will now see the list of graphql queries
8. Click the &oplus; before the query that you would like to test
9. This will add a shell for the query in the middle panel
   ![Alt text](<Screenshot 2024-01-18 at 23.25.33.png>)
10. The selected query documentation will be on the left pane
11. It will show the query arguments type, and the fields you want to retrieve.
12. If the return field is another type, click on it and it will display its own fields.
13. Click on the &oplus; before any field and it will add it to the query for you.
14. The middle bottom pane is where you put the values for the arguments. For nameId you can put a number as a string or name. For the getAll\* queries the PaginationInput is an object with limit and offset properties, and both take integers.
15. When ready click the button in the middle pane at the top. When fields are entered it should turn blue.
16. The response will display on the right pane.
    ![Alt text](<Screenshot 2024-01-18 at 23.35.36.png>)
17. Still looking for documentation on how to use Jest to test graphql/type-graphql resolvers.

[localhost:4000/graphql]: https://localhost:4000/graphql
