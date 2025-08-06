# Criando uma biblioteca para e-commerce

>_💻 Status do projeto: Finalizado._

## Descrição Do Projeto

Foi criada uma aplicação com o objetivo de executar funcionalidades comuns em sistemas de e-commerce pelo terminal. O desafio proposto é transformar a lógica das funcionalidades de geração de qrcodes e senhas em uma biblioteca, promovendo maior facilidade para a utilização desses recursos em outros projetos. O link para o projeto base
<a src="https://github.com/digitalinnovationone/formacao-nodejs/tree/main/06-shopee-cart"> desenvolvido pelo instrutor. </a>

## Funções da biblioteca

A biblioteca possui 2 funcionalidades, a geração de qrcodes e a geração de senhas.

### Geração de QRCODE

Essa funcionalidade permite gerar um código QR com base em uma string passada como argumento da função generate.

```js
await qrcodeGenerator.generate(link: string): Promise<string>; // retorna o qrcode passado no argumento no formato de string
```
#### Parâmetros

- **link:** String contendo o valor que será convertido em qrcode. 

### Geração de senha

Essa funcionalidade permite gerar uma senha com caracteres aleatórios, sendo esses personalizáveis.

```js
passwordGenerator.createPassword(passwordLength: number, hasSpecialCharacters: boolean, hasUppercase?: boolean, hasLowercase?: boolean, hasNumber?: boolean): string; // retorna uma sequência aleatória de caracteres com base nas regras estabelecidas
```

#### Parâmetros

- **passwordLength:** Define o tamanho da senha gerada
- **hasSpecialCharacters:** Define se a senha possuirá caracteres especiais(?!@#$%¨&*()_+=-[]{}.,;:)
- **hasUppercase:** Define se a senha possuirá caracteres em caixa alta
- **hasLowercase:** Define se a senha possuirá caracteres em caixa baixa
- **hasNumber:** Define se a senha possuirá caracteres numéricos