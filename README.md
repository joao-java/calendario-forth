Erro: Access to XMLHttpRequest at 'mongodb+srv://joao:eP2gAvZ65Po5exMy@lineup.sbovbxd.mongodb.net/LINEUP?retryWrites=true&w=majority/agendamento' from origin 'http://localhost:4200' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

Solução: 
criar um arquivo na rais do projeto com o nome "proxy.conf.json" com a estrutura abaixo:
{
  "/api": {
    "target": "mongodb+srv://joao:eP2gAvZ65Po5exMy@lineup.sbovbxd.mongodb.net/LINEUP?retryWrites=true&w=majority",
    "secure": false,
    "changeOrigin": true
  }
}

Execute: ng serve --proxy-config proxy.conf.json

OBS* E no seu serviço TarefasService, você usaria "/api/agendamento" para fazer as chamadas ao MongoDB Atlas.