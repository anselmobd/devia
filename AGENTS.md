# Orientações para agentes de IA

## Estrutura do projeto

- A aplicação usa o App Router do Next.js. Trabalhe em `app/` para alterar a página, o layout ou os estilos publicados pela aplicação.
- Consulte `package.json` para os scripts e dependências declarados, `package-lock.json` para as versões resolvidas e `README.md` para os requisitos de desenvolvimento.
- Use npm e atualize o arquivo de lock junto com qualquer alteração de dependências. Mantenha `node_modules/` e `.next/` fora do controle de versão.

## Alterações na interface

- Escreva os textos da interface em português do Brasil.
- Prefira componentes de servidor. Use componentes de cliente quando a funcionalidade precisar de estado, eventos ou APIs do navegador.
- Mantenha a animação da forca em CSS e respeite a preferência por movimento reduzido. Ao editar o desenho ASCII, preserve os espaços e as quebras de linha que determinam seu alinhamento.
- Reutilize a estrutura existente e limite as mudanças ao pedido. Preserve alterações locais que não façam parte da tarefa.

## Verificação

- Use `npm ci` para instalar as dependências a partir do arquivo de lock.
- Execute `npm run build` após alterar a aplicação. Para mudanças visuais, confira a página no navegador quando disponível. Se alterar a animação, confira um ciclo completo e o comportamento com movimento reduzido.
- Informe quais verificações foram executadas e quais ficaram pendentes.
