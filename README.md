# Iara Games - Plataforma de Jogos Brasileiros
Para quem quer **jogar algo novo mas não sabe o quê**, a Iara Games é uma plataforma de descoberta que organiza jogos de forma clara e acessível, com uma identidade brasileira própria — diferente das lojas globais, que otimizam para transação, e das agregadoras, que otimizam para volume.

## Visão Geral
A Iara Games é um projeto desenvolvido para um trabalho da [Fiap.com](http://Fiap.com) que consiste em uma plataforma digital voltada ao universo dos games.

## Evolução do projeto
### Sprint 1
- Analise de concorrentes
- Definição da identidade visual, design system e logotipos da plataforma
- Homepage estática da primeira página do site com seções de Hero, Jogos, Categorias, Sobre, Banner CTA e Footer

### Sprint 2
- Usabilidade e Jornada do nosso usuário na plataforma
- Criação de 3 personas que nos guiaram na jornada de criação do projeto
- Banner de captação de cadastro para novos jogadores e com desconto

### Sprint 3
- Aprofundamento de identidade visual completo da plataforma.
- Criação do Logotipo oficial da página, elementos gráficos proprios
- Reforma total do código-fonte que foi migrado de Tailwind para Bootstrap 

## Público Alvo e Personas
Pessoas interessadas em jogos digitais que usam plataformas online para descobrir novos games, conhecer lançamentos, pesquisar títulos e acompanhar conteúdos do universo gamer.

### Persona: O jogador clássico
Bruno Almeida tem 24 anos e é um apreciador do mercado nacional de jogos. Ele gosta de jogar, pesquisa, lê avaliações e assiste a gameplays antes de comprar o jogo.
Participa de comunidades e segue criadores de jogos brasileiros.

### Persona: A jogadora Pragmática
Iara Moreira tem 29 anos e joga ocasionalmente.
Joga duas a três noites por semana no mesmo notebook modesto que usa para trabalhar.
Compra três a quatro jogos por ano e pensa bastante antes de cada compra. Já comprou
jogo que travava na primeira fase e não pediu reembolso porque não sabia que podia

### Persona: O Criador
Zé Boto Nascimento tem 33 anos e publicou dois jogos com um estúdio de três pessoas e verba de marketing zero. Nas duas
vezes o jogo apareceu alguns dias na lista de lançamentos e sumiu. O que mais o
incomoda é que “brasileiro” existe como metadado na ficha do produto, mas não como
caminho de descoberta.

## Identidade Visual
![Imagem da home do site Iara Games](/public/assets/home.png)

## Paleta de Cores e Tipografia

| Aplicação | Token |
|----------|--------|
| Primary| #24B956 |
| Secondary | #F0B933 |
| Background | #031209 e #24B956 |
| Textos | #F9FBFA  |
| Bordas | #F9FBFA · 24% de opacidade |
| Fonte Títulos | Big Shoulders |
| Fonte Texto | Raleway |


## Acessibilidade
- Uso de regiões semânticas como `header`, `main`, `section` e `footer` para organizar o conteúdo.
- Hierarquia de títulos para indicar a estrutura das informações.
- Links utilizados para navegação e botões utilizados para ações ou envio de formulários.
- As imagens recebem textos alternativos descritivos por meio do atributo alt. 

### Formulários e Controles
- Cada campo possui um label associado por meio dos atributos `for` e `id`.
- Campos obrigatórios utilizam `required` e tipos apropriados, como `email` e `password`.
- Mensagens de feedback para orientar o usuário durante o preenchimento.
- As abas possuem atributos de acessibilidade como `role`, `aria-controls` e `aria-selected`.
- Ícones decorativos são marcados com `aria-hidden="true"` quando o texto adjacente já comunica a ação.

## Tecnologias utilizadas
- **HTML** → Estrutura moderna com tags semânticas.
- **Bootstrap 5** → Estilização rápida, responsividade, componentes padronizados e consistentes.
- **Iconify** → Icones próprios que ajudam a reforçar a identidade visual.
- **Google Fonts** → Tipografia personalizada para reforçar identidade visual.

## Deploy
Para ver o site no ar use o link → [https://iara-games-fiap.vercel.app/](https://iara-games-fiap.vercel.app/)

## Autores
Esse projeto foi possível graças a uma equipe foda:

- Ananda - Time de Produto
- Vidal - Time de Ilustração
- Pamella - Time de Marketing
- Vinicius - Time de UI Design
- Thais - Time de desenvolvimento