/**
 * Created by lan on 2017/2/27.
 */
var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: "1503290716",
    channelSecret: "f4e7099d5aecde6f4cccd72c0f36a9c0",
    channelAccessToken: "OBMm7XASIF3y4WaLNPtzDP6UtU5RtaftEGuUdwDf3RvKcAc+ap+auvi6azbALVVyJ3bRmQSJZrjtnawjS2RvIOvwv8CtbyzalT7XsIfDE7gE010+AYwpTc2NkMazD+jynU4M1vI2n0HazWx/MkJPHAdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});