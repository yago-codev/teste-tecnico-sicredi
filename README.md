# Teste Técnico Sicredi

### Sobre o projeto:

Aplicação desenvolvida de acordo com os requisitos técnicos
solicitados para a avaliação do cargo de desenvolvedor React no Sicredi.

### Objetivo do projeto:

- Desenvolver uma interface gráfica para consumir a seguinte [API](http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon).
- A aplicação deve possuir 4 páginas:
  - **Login**:
    - Única página disponível se o usuário não estiver logado;
    - Criar um usuário básico para acesso (optei por desenvolver uma API de autenticação);
  - **Listagem de dragões**:
    - Os nomes devem ser ordenados alfabeticamente;
    - A partir da página de lista, deverá ser possível remover e alterar as informações das entidades;
  - **Detalhes do dragão (os seguintes dados devem ser apresentados)**:
    - Nome;
    - Tipo;
    - Data de criação;
  - **Criação de dragão**.

### Ferramentas necessárias para executar aplicação:

> O projeto está subdividido em duas pastas distintas:
> back: API de autenticação.
> front: Client para autenticação e consumo da API de dragões.

> Utilizei o Yarn para o gerenciamento de pacotes,
> caso não possua ele em sua máquina,
> acesse esse [link](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

> A API de autenticação foi implementada com Docker,
> caso não possua ele em sua máquina,
> acesse esse [link](https://www.docker.com/get-started).

> O ORM da API de autenticação foi configurado para
> conectar-se a uma base de dados chamada "api-auth".
> Essa base de dados poderá ser criado com
> qualquer "GUI Client" de banco de dados.
> Eu utilizo o Postbird,
> caso não possua ele em sua máquina,
> acesse esse [link](https://www.electronjs.org/apps/postbird).

### Comandos para executar a aplicação:

Estando com o Docker instalado,
rode o seguinte comando:

```
docker run --name api-auth -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Abra seu "GUI Client".
As seguintes credenciais de acesso foram
setadas no ORM e devem ser utilizadas para
conectar ao banco de dados através do "GUI Client":

```
username: postgres
password: docker
```

Agora utilize seu "GUI Client" para criar uma database chamada:

```
api-auth
```

Pronto,
a configuração do banco de dados está concluída,
agora entre na pasta da aplicação através do terminal e
navegue até o diretório "back":

```
cd back
```

Instale as dependências:

```
yarn
```

Inicie o servidor que
foi previamente configurado para responder
através do "http://localhost:3333":

```
yarn dev
```

Agora em outra aba do terminal,
entre na pasta "front":

```
cd front
```

Instale as dependências:

```
yarn
```

Inicie o servidor:

```
yarn start
```

Caso ocorra algum erro durante o processo,
verifique se todas as etapas mencionadas acima
foram cumpridas corretamente.
Certifique-se de estar com as portas 3333 e 3000 livres.
