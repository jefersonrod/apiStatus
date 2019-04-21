# apiStatus
apiStatus


![apiStatus_001](https://user-images.githubusercontent.com/12129206/56459432-0995b480-636a-11e9-8494-29231f26d61c.png)

## Simple web server to display on a TV the status of analyst working on tickets, for monitoring status purpose.

Plataform: NodeJS
Modules: Express
Language: Portuguese/Brazil

Scenario: Every analyst have a spreadsheet to fill with informations about the task at the moment, so another team located in another site needs to know the status of tickets. I developed this app to receive an endpoint with ticket number and name of analyst through an url build by Excel VBA function. 
The application runs on nodejs and listening on port 3000, see example of url below to update status:

http://localhost:3000/add/column/analyst/ticket/date dd/mm/yyyy/hour hh:mm

for example purpose:
column = 1
analyst = R2D2
ticket = G3434
date = 21/04/2019 encoded to 21%2F04%2F2019
hour = 19:58 encoded to 19%3A58

The encoded is necessary to convert special characters "/" and ":", your endpoint must be submitted encoded.

url encoded:
http://localhost:3000/add/1/R2D2/G3434/21%2F04%2F2019/19%3A58

So server will response with a message "Status adicionado!" (Added Status)

On the Front end the status is updated automatically, the values submitted are added to history log on column "Histórico" (History)

There is a green button "Atualizar" (Update) on the top left corner to update the status manually, therefore there is a scheduled update every 30 secs.
