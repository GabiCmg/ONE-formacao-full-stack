# Boas Práticas

São boas práticas criar uma pasta para separar os arquivos das páginas .html. Nomeamos essa pasta como “assets” e nela colocamos diversas subpastas como img - armazenando as imagens do projeto -, css - contém os arquivos de estilização das páginas, msc - para músicas -, etc.

Separamos a estilização de uma página por partes 

---

## Metodologia Atomic Design

Criamos uma pasta ou arquivos para cada elemento/componente da nossa página. Nos ajuda organizar e mapear a estrutura do nosso CSS.

### Estrutura

A estrutura de uma página é composta por diferentes elementos que são organizados em etapas. Nomeamos essas etapas como:

#### Átomo

Representa as tags html individualmente. Na imagem abaixo, são átomos: label, input, button.

![atomo](https://github.com/GabiCmg/ONE-formacao-full-stack/blob/main/II_formacao_Front-End/Arquitetura-css-assets/assets/img/readme/atomo.png?raw=true)

#### Molécula

Quando juntamos diversos átomos, formamos uma molécula. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6086f04-846b-40a9-b1d1-be1ef0d5600d/Untitled.png)

#### Organismo

São junções de diversas moléculas diferentes.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa7de7a4-d468-49e8-b592-f35a55855812/Untitled.png)

#### Templates

São junções de diferentes organismos. No exemplo abaixo é possível mapear o cabeçalho, o banner e a descrição do site - pode estar em lorem por representar uma página -, cada composto nomeado é um organismo.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5c04088-0062-43ac-bcbb-11c95e6a6b42/Untitled.png)

#### Páginas

Por fim, as páginas são conjuntos das fases anteriores e diferente do template, suas informações são **reais** e bem construídas com textos e imagens verdadeiros.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eea45565-a505-4c8d-82a8-dcefb6c667f9/Untitled.png)

---

## Metodologia BEM

A metodologia BEM - do inglês, *bloc*, *element* e *modifier* - foi criada para arquitetar uma aplicação padronizada referente aos pilares da sigla, bloco, elemento e modificador. 

Utilizamos especificamente para **nomenclatura de classes**. A aplicação para nomear arquivos não é realizada através da metodologia bem.

**Bloco** é um pequeno contexto/pedaço de uma aplicação. 

**Elemento** é o filho de um bloco, o separamos do bloco por dois *underlines* (__).

Então nomeamos como:

```css
bloco
bloco__elemento
bloco--modificador
bloco__elemento--modificador
```

---

## Dicas

<aside>
💡 É importante manter a estilização de um elemento no css em ordem alfabética, assim facilita futuras modificações suas ou de outros que acessam o código.

</aside>

Sobre a medida .em: 

[https://www.alura.com.br/artigos/porque-usar-em-no-seu-css-hoje-em-dia](https://www.alura.com.br/artigos/porque-usar-em-no-seu-css-hoje-em-dia)

Componentes css:

[https://www.alura.com.br/artigos/criando-componentes-css-com-padrao-bem](https://www.alura.com.br/artigos/criando-componentes-css-com-padrao-bem)
