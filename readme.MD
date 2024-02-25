to docker compose whole project: docker-compose up --build

to run the backend dockerfile command: docker run -p 4001:4001 tgc-backend

to clearDB, you need to enter the backend container and run the command: docker exec -it #containerID sh

and then: docker exec <_containerID>  npm run resetDB

to run the front_boilerplate command: docker run -p 3000:3000 tgc-frontend_boilerplate

Other commands

stop all containers dc down

start all containers dc up -d

autogen graphql queries npm run codegen
