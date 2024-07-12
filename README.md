## Installation

```
$ yarn install
```

## Setup Database

```
- update 'Database_url' in '.env' file (Make sure database connection is established befor running the next commands)
$ npx prisma generate
$ npx prisma migrate dev
```

## Running the app

```
$ yarn run start