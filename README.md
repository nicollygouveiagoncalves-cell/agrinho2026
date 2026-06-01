# agrinho2026
# 🌱 Agro Forte Quiz – Equilíbrio entre Produção e Meio Ambiente

O **Agro Forte Quiz** é uma aplicação web interativa e responsiva desenvolvida especialmente para o **Projeto Agrinho**. O objetivo principal do projeto é conscientizar e testar os conhecimentos dos usuários sobre agricultura sustentável, preservação do solo, legislação ambiental brasileira e o papel vital da biodiversidade no ecossistema agrícola.

---

## 🚀 Funcionalidades

* **10 Questões Temáticas:** Perguntas objetivas cobrindo tópicos como Código Florestal, Reserva Legal, Manejo Integrado de Pragas (MIP), polinizadores (abelhas) e irrigação eficiente.
* **Sistema de Timer Dinâmico:** O usuário tem **20 segundos** para responder cada questão, com uma barra de tempo que muda de cor (alerta/perigo) conforme o tempo se esgota.
* **Pontuação com Bônus:** O sistema calcula os pontos baseando-se no tempo restante de resposta, recompensando o raciocínio rápido.
* **Mecanismo de Embaralhamento (Shuffle):** As perguntas são embaralhadas a cada nova partida, garantindo uma experiência única em cada tentativa.
* **Painel de Resultados Detalhado:** Apresenta o score final (normalizado de 0 a 1000), total de acertos/erros, tempo médio de resposta e um gráfico circular animado via SVG.
* **Feedbacks Personalizados:** Mensagens e emojis dinâmicos gerados de acordo com a porcentagem de acertos do jogador.
* **Tela de Revisão Pedagógica:** Permite ao usuário rever todas as questões respondidas, destacando o que ele errou/acertou e exibindo uma **explicação detalhada** sobre o tema.
* **Design Moderno e Responsivo:** Interface totalmente adaptada para dispositivos móveis e desktops, contando com elementos visuais imersivos (como folhas flutuantes animadas na tela inicial).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas (**Vanilla Web Techs**), garantindo leveza, performance e facilidade de manutenção:

* **HTML5:** Estruturação semântica das telas e contêineres do quiz.
* **CSS3:** Estilização moderna utilizando variáveis nativas (`:root`), layouts baseados em *Flexbox* e *Grid*, transições suaves e animações baseadas em `@keyframes`.
* **JavaScript (ES6+):** Lógica principal da aplicação, manipulação dinâmica do DOM, gerenciamento de estado do jogo, cálculo de métricas e controle dos temporizadores.
* **JSON:** Organização e estruturação do banco de dados de perguntas e respostas (`questions.json`).

---

## 📂 Estrutura do Projeto

```text
├── index.html       # Estrutura principal e gerenciamento das telas
├── style.css        # Identidade visual, responsividade e animações
├── quiz.js          # Lógica do jogo, controle de fluxo e manipulação de estado
└── questions.json   # Base de dados com as perguntas e explicações pedagógicas