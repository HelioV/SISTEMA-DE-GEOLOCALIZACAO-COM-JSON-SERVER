# SISTEMA DE GEOLOCALIZAÇÃO MUNDIAL
PARA O USO DA API TEMOS DUAS ALTERNATIVAS

LARAVEL (PADRÃO) OU
JSON-SERVER (MAIS SIMPLES) API FAKE


JSON-SERVER
- Dentro dos arquivos temos uma pasta chamada baseDeDados dentro dela temos db.json é onde consta a base de dados.
Neste caso vamos instalar o Json-Server faremos em dois passos.


1) npm install -g json-server (Vai instalar.)
2) copiamos a base de dados db.json.
3) json-server --watch db.json - Estamos a meter em funcionamento
4) padrão rodando em http://localhost:3000 e http://localhost:3000/pessoas

5) No arquivo service da aplicação Angular te
