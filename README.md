# Database course project preservation

## About

This repository contains the course project of the Database course at the University of ECNU.
I don't want to install the development environment on my computer when the final exam is coming,
so I upload the project here.

## Usage

I decide to use nuxt to build the project.Because the full stack development environment will
make the connection test between front end and back end more easier.At the same time ,fronted page
is build by the synatic framework vue3, which contributes to the development efficiency that is not
the essience. We will focus on the back end and the database because the course we take is "DataBase Application".

command below will open the project in your browser.

> Notice that Node 18 is required.
> version of pnpm is updated to 10.x, but the V10.x add a stupid update command, so you need to
> use the command `pnpm approve-builds` to approve the build command of the third part package.
> maybe I will back to the V9.x later, it's quit easy to use.

Bro, here we go:

```bash
pnpm i
pnpm dev -o
```

The database framework is prisma. Configure the database connection in the `.env` file.
active the prisma config changes by `npx prisma generate`.
push the changes to the database by `npx prisma db push`.
`npx prisma db pull` will pull the changes from the database.
If you want to check the database, you can use the command `npx prisma studio`.It will open
a database connection GUI in your browser, which is much beatiful compared to the Navicat.

## Why Nuxt

- clear project structure.
- inner datafetch.
- type safe.
- auto import.
- auto path route, no need to worry about cors.
- auto code split.
- many npm packages that can be used in the project.
- I like JS.
- easy to deploy.
- use vite, hot reload.
- full stack framework, which make it easier to debug and manage package.
- no "Java Giant", it is important.🤣👉
- we just make a simple project that is suitable for:
  - Rapid prototyping development
  - Small to medium-sized projects
  - Projects requiring rapid iteration
  - Small team development scenarios

## database 

If we finally decide to use MySQL, Railway is a good choice, $5/month free trial is enough for presentation.