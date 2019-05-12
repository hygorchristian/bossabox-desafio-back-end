# VUTTR Back

Desafio back-end bossabox de construir uma aplicação simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Que deverá ser construído utilizando qualquer framework JavaScript de sua preferência, no meu caso [Node JS](https://nodejs.org/).

<!-- ## :book: Sumário

- [Dependências](https://github.com/rushy06/bossabox-desafio-back-end#gear-depend%C3%AAncias)
- [Guia de instalação](https://github.com/rushy06/bossabox-desafio-back-end#rocket-guia-de-instala%C3%A7%C3%A3o)
  - [Como instalar](https://github.com/rushy06/bossabox-desafio-back-end#como-instalar)
  - [Executando a aplicação](https://github.com/rushy06/bossabox-desafio-back-end#executando-a-aplica%C3%A7%C3%A3o)
- [Funcionalidades](https://github.com/rushy06/bossabox-desafio-back-end#bulb-funcionalidades)
- [Conteinerização (Docker)](https://github.com/rushy06/bossabox-desafio-back-end#dolphin-conteineriza%C3%A7%C3%A3o-docker)
  - [Comandos Docker](https://github.com/gabrielsouzadev/vuttr-vue#comandos-docker) -->

## :gear: Dependências

- [Node](https://nodejs.org/en/) (10.13.0 ou maior)
- [Yarn](https://yarnpkg.com/pt-BR/) ou [NPM](https://www.npmjs.com/)

## :rocket: Guia de instalação

Para a instalação e execução dos scripts será utilizado o yarn.

### Como instalar

Clone este repositório:

```
git clone https://github.com/rushy06/bossabox-desafio-back-end
```

Entre na pasta e instale as dependências:

```
cd bossabox-desafio-back-end && yarn
```

### Executando a aplicação

Iniciar a aplicação em modo de desenvolvimento:

```
yarn run start
```

Realizar os testes unitários:

```
yarn run test
```

## :whale2: Conteinerização (Docker)

### Comandos Docker

Compilar a imagem

```
docker build -t dockeruser/appname .
```

Executar a imagem (A aplicação estará acessível em localhost:8080)

```
docker run -it -p 8080:8080 --rm --name containername dockeruser/appname
```
