# Skills aplicaveis (Node.js / TypeScript)

## Basais (sempre)
- excelencia-total
- scrum-microsprints
- documentacao-continua
- versionamento-sistema
- testes-completos

## Condicionais
- automatizacao-total (quando ha acao manual do usuario)
- auditoria-sistema (quando solicitado)

## Padroes obrigatorios Node/TS
- Variaveis em PT-BR. Mensagens UI/UX em PT-BR. Commits em PT-BR.
- UTF-8. Timezone America/Sao_Paulo (process.env.TZ ou date-fns-tz/luxon).
- TS estrito. Evitar 'any' sem comentario.
- Testes Jest/Vitest cobrindo cada endpoint.
- package.json com 'engines' e 'version' (SemVer).
- ESLint + Prettier configurados.
- Validacoes Brasil quando aplicavel (cpf-cnpj-validator).
- LGPD: dados pessoais protegidos. Logs sem PII.
