## Install dependences NPM
    
    npm install

## Create a database 'sistema' and table:
    CREATE TABLE IF NOT EXISTS `tutorials` (

        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,

        title varchar(255) NOT NULL,

        description varchar(255),

        published BOOLEAN DEFAULT false
        
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# passos para executar o sistema atualizando o NPM
 
 - Delete o arquivo package-lock.json;
 - Apague o conteudo do objeto JSON no campo "dependencies" deixando apenas a chave vazia "dependencies":{};
 - Execute o comando para instalar os recursos necessário para rodar a API:
    npm install cors express mysql
 - Agora poderá executar a API com:
    `npm start`
 - Usando o PostMan ou outro basta consumir as rotas de exemplo:
    => Cadastrar novo Tutorial [POST] http://localhost:8081/api/tutorials
        
        Corpo da requisição (Body):

``{
    "title": "Primeiro Tutorial",
    "description": "Tutorial inicial",
    "published": 1
}``
