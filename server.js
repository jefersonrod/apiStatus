//libs to install
//npm install -g nodemon
//npm install express


var lojas = {};
var col;
lojas[col];
var reply;

console.log("Server running...");
var fs = require("fs");
//var rawdata = fs.readFileSync("lojas.json");
//var lojasJson = JSON.parse(rawdata);

//variaveis de tags de colunas html
var nl = "\n";
var divst = "<div id=\"";
var diven = "\">";
var h2st ="<h2>"
var h2en = "</h2>"
var br = "<br>"
var col = "col";
//Bootstrap 4 reference
var b4="<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">";
//BootStrap 4 Status
var divCardInicio = "<div class=\"card text-white ";
var corCol1 = "bg-primary";
var corCol2 = "bg-secondary";
var corCol3 = "bg-success";
var corCol4 = "bg-info";
var corCol5 = "bg-warning";
var corCol;
var divCardFinal = "  mb-3\">";
var divCardBody = "<div class=\"card-body\">";
var divTitleInicio = "<h3 class=\"card-title\">";
var h3Final = "</h3>";
var pCardTextInicio = "<p class=\"card-text\">";
var pFinal = "</p>";
var divFinal = "</div>";
//BootStrap 4 Disponivel
var divClassCard = "<div class=\"card\">";
var h5CardDisp = "<h5 class=\"card-header\">Disponivel</h5>";
var h5Final = "</h5>";


var fcol;
var fcolhtmlst;
var fcolhist;
var htmldatahist;

var fcol1 = "col1.json";
var fcol1htmlst = "website/status1.html";
var fcol1hist = "website/status1-log.html";
var fcol2htmlst = "website/status2.html";
var fcol2hist = "website/status2-log.html";
var fcol3htmlst = "website/status3.html";
var fcol3hist = "website/status3-log.html";
var fcol4htmlst = "website/status4.html";
var fcol4hist = "website/status4-log.html";
var fcol5htmlst = "website/status5.html";
var fcol5hist = "website/status5-log.html";
var htmldatahist1;
var htmldatahist2;
var htmldatahist3;
var htmldatahist4;
var htmldatahist5;
var fcol2 = "col2.json";
var fcol3 = "col3.json";
var fcol4 = "col4.json";
var fcol5 = "col5.json";
var fileCol = "lojas.json";

if (fs.existsSync(fcol1hist)) {
    
    htmldatahist1 = fs.readFileSync(fcol1hist, 'utf8');
    //var htmlLog = HTMLDocument.parse(rawdata1);
    console.log(fcol1hist + " found");    
}else{
    fs.writeFile(fcol1hist,b4);
    htmldatahist1 = fs.readFileSync(fcol1hist, 'utf8');
    console.log("Criado novo arquivo de histórico vazio");
    console.log("Não encontrado: "+fcol1hist);
    
}
if (fs.existsSync(fcol2hist)) {
    
    htmldatahist2 = fs.readFileSync(fcol2hist, 'utf8');
    //var htmlLog = HTMLDocument.parse(rawdata1);
    console.log(fcol2hist + " found");    
}else{
    fs.writeFile(fcol2hist,b4);
    htmldatahist2 = fs.readFileSync(fcol2hist, 'utf8');
    console.log("Criado novo arquivo de histórico vazio");
    console.log("Não encontrado: "+fcol2hist);
}
if (fs.existsSync(fcol3hist)) {
    
    htmldatahist3 = fs.readFileSync(fcol3hist, 'utf8');
    //var htmlLog = HTMLDocument.parse(rawdata1);
    console.log(fcol3hist +  " found");    
}else{
    fs.writeFile(fcol3hist,b4);
    htmldatahist3 = fs.readFileSync(fcol3hist, 'utf8');
    console.log("Criado novo arquivo de histórico vazio");
    console.log("Não encontrado: "+fcol3hist);
}
if (fs.existsSync(fcol4hist)) {
    
    htmldatahist4 = fs.readFileSync(fcol4hist, 'utf8');
    //var htmlLog = HTMLDocument.parse(rawdata1);
    console.log(fcol4hist + " found");    
}else{
    fs.writeFile(fcol4hist,b4);
    htmldatahist4 = fs.readFileSync(fcol4hist, 'utf8');
    console.log("Criado novo arquivo de histórico vazio");
    console.log("Não encontrado: "+fcol4hist);
}
if (fs.existsSync(fcol5hist)) {
    
    htmldatahist5 = fs.readFileSync(fcol5hist, 'utf8');
    //var htmlLog = HTMLDocument.parse(rawdata1);
    console.log(fcol5hist + " found");    
}else{
    fs.writeFile(fcol4hist,b4);
    htmldatahist5 = fs.readFileSync(fcol5hist, 'utf8');
    console.log("Criado novo arquivo de histórico vazio");
    console.log("Não encontrado: "+fcol5hist);
}

var express = require("express");
var app = express();
var server = app.listen(3000, listening);

function CreateHistory(colunaNum){
    fs.writeFile(filenameDisp, disponHTML, finished)
}

function listening(){
    console.log("Listening...");
}

app.use(express.static("website"));

app.get("/status/:loja", sendStatus);

function sendStatus(request, response){
    var data = request.params;
    response.send("Status solicitado de "+data.loja);
}

app.get("/lojas", sendAll);

function sendAll(request, response){
    var allLojas = htmldatahist1 + htmldatahist2 + htmldatahist3 + htmldatahist4 + htmldatahist5
    response.send(allLojas);
}


app.get("/analista/:idcol", sendIdCol);

function sendIdCol(request, response){
    
    var idcol = request.params.idcol;
    var filenamePre = "col" + idcol + ".json";
    var rawdata = fs.readFileSync(filenamePre);
    var lojasJson = JSON.parse(rawdata);
    reply = lojasJson;
    
    response.send(reply);
}

app.get("/disp/:idcol?/:analista?", sendIdColDisp);

function sendIdColDisp(request, response){
    
    var idcol = request.params.idcol;
    var analista = request.params.analista;
    var filenameDisp = "website/status" + idcol + ".html";    
    disponHTML = divClassCard+h5CardDisp+divCardBody+pCardTextInicio+analista+pFinal+divFinal+divFinal
    fs.writeFile(filenameDisp, disponHTML, finished)
    reply = { msg: "Status atualizado para "+analista  }
    function finished(err){
        console.log("error: "+err);
        console.log(reply);
        console.log("Updated file!");
    }
        //reply = { msg: "Status disponivel atualizado!" }
        
    response.send(reply);
}


app.get("/add/:col?/:analista?/:loja?/:dia?/:hora?", addStatus);
app.get("/add", errorAddStatus);

function addStatus(request, response){
    var data = request.params;
    var col = Number(data.col);    
    console.log("coluna: "+col);
    var loja = data.loja;
    var analista = data.analista;
    var dia = data.dia;
    var hora = data.hora;
    var reply;
    if (!col) {
        reply = {
            msg: "é necessário preencher col/analista/loja/dia/hora"
        }
    }
    if (!analista) {
        reply = {
            msg: "é necessário preencher col/analista/loja/dia/hora"
        }
    }
    if (!loja) {
        reply = {
            msg: "é necessário preencher col/analista/loja/dia/hora"
        }
    }
    if (!dia) {
        reply = {
            msg: "é necessário preencher col/analista/loja/dia/hora"
        }
    }
    if (!hora) {
        reply = {
            msg: "é necessário preencher col/analista/loja/dia/hora"
        }
    }else{
    var status = {};
    status["analista"] = analista;
    status["loja"] = loja;
    status["dia"] = dia;
    status["hora"] = hora;
    lojas[col] = status;

        if (col == 1) {
            fileCol = fcol1;
            col = "col"+col;
            fcolhtmlst = fcol1htmlst;
            htmldatahist = htmldatahist1;
            fcolhist = fcol1hist;
            corCol = corCol1;
            gravaStatus(col,fileCol,loja,analista,dia,hora,fcolhtmlst,htmldatahist,fcolhist,corCol)
        }
        if (col == 2) {
            fileCol = fcol2;
            col = "col"+col;
            fcolhtmlst = fcol2htmlst;
            htmldatahist = htmldatahist2;
            fcolhist = fcol2hist;
            corCol = corCol2;
            gravaStatus(col,fileCol,loja,analista,dia,hora,fcolhtmlst,htmldatahist,fcolhist,corCol)
        }
        if (col == 3) {
            fileCol = fcol3;
            col = "col"+col;
            fcolhtmlst = fcol3htmlst;
            htmldatahist = htmldatahist3;
            fcolhist = fcol3hist;
            corCol = corCol3;
            gravaStatus(col,fileCol,loja,analista,dia,hora,fcolhtmlst,htmldatahist,fcolhist,corCol)
        }
        if (col == 4) {
            fileCol = fcol4;
            col = "col"+col;
            fcolhtmlst = fcol4htmlst;
            htmldatahist = htmldatahist4;
            fcolhist = fcol4hist;
            corCol = corCol4;
            gravaStatus(col,fileCol,loja,analista,dia,hora,fcolhtmlst,htmldatahist,fcolhist,corCol)
        }
        if (col == 5) {
            fileCol = fcol5;
            col = "col"+col;
            fcolhtmlst = fcol5htmlst;
            htmldatahist = htmldatahist5;
            fcolhist = fcol5hist;
            corCol = corCol5;
            gravaStatus(col,fileCol,loja,analista,dia,hora,fcolhtmlst,htmldatahist,fcolhist,corCol)
        }

        function gravaStatus(col,fileCol,loja,analista,dia,hora,fcolhtmlst,htmldatahist,fcolhist,corCol){
            //write json file
            var lojasJson = JSON.stringify(lojas, null, 2);
            console.log(lojasJson);
            fs.writeFile(fileCol,lojasJson,finished);

            //write status html file
            var htmldatatemp = divCardInicio+corCol+divCardFinal+divCardBody+divTitleInicio+loja+h3Final+pCardTextInicio+dia+br+hora+br+analista+pFinal+divFinal+divFinal;
            fs.writeFile(fcolhtmlst, htmldatatemp, finished)
            //write history html file with new line at the end
            var lojasHTML = htmldatahist + htmldatatemp + nl;  
            fs.writeFile(fcolhist, lojasHTML, finished)
            function finished(err){
                console.log("Written file!");
            }
            reply = {
            msg: "Status adicionado!"
            }
        }       
    
    }
    response.send(reply);
}

function errorAddStatus(request, response){
    var error = {
        msg: "informar add/col/analista/loja/inicio"
    }
    response.send(error);
}