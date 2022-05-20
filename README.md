# desafio-frontend-conta-azul

## Descrição
Projeto desenvolvido para o processo seletivo da Conta Azul.
A aplicação segue a seguinte especificação:

- Exibe as condições climáticas das seguintes cidades: Nuuk/GL, Urubici/BR e Nairobi/KE
- Temperatura exibida em graus Celsius
- Umidade exibida em percentual
- Pressão exibida em hectoPascal
- Temperaturas igual ou abaixo de 5° são exibidas em azul
- Temperaturas acima de 5° e igual ou abaixo de 25° são exibidas em laranja
- Temperaturas acima de 25° são exibidas em vermelho
- As condições climáticas são atualizadas a cada 10 minutos
- As condições climáticas são cacheadas no front-end por 10 minutos
- API utilizada para consulta: [OpenWeather](https://openweathermap.org)
- O visual da aplicação segue os seguintes mockups: [MarvelApp](https://marvelapp.com/prototype/13gd240g)

## Instalação
1. Verifique se o computador em questão possui Node instalado. Versão utilizada: v10.21.0. É provável que outras versões não tenham problemas para executar o projeto
3. Verifique se o computador em questão possui Vue CLI instalado. Versão utilizada: @vue/cli 4.5.9. É provável que outras versões não tenham problemas para executar o projeto
4. Acesse o CMD/Terminal
5. Clone este repositório
6. Execute o comando ```npm i``` para instalar as dependências
7. Execute o comando ```npm run test:unit``` caso queira executar os testes unitários
8. Execute o projeto através do comando ```npm run serve```
9. Acesse o endereço [http://localhost:8080/](http://localhost:8080/) no navegador para visualizar a aplicação