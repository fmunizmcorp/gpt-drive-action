<!--
  Graphify Knowledge Graph - Adaptado para Claude.ai (web)
  Atualizado pelo orquestrador automatico.
  NAO edite o bloco GRAPHIFY-START / GRAPHIFY-END.
-->

# CLAUDE.md - Instrucoes de Contexto

> **Este arquivo e a primeira coisa que o Claude le neste projeto.**
> **Siga as instrucoes daqui a risca - elas economizam tempo e tokens.**

## REGRA #1 - Antes de ler QUALQUER arquivo

**Voce (Claude) DEVE consultar primeiro estes documentos, NESTA ORDEM:**

1. `docs/graphify/index.md` - mapa hierarquico do projeto
2. `docs/graphify/wiki.md` - descricao em linguagem natural por modulo
3. `docs/graphify/symbols.md` - indice de simbolos (classes, funcoes, tabelas)
4. `docs/graphify/dependencies.md` - quem chama quem, quem importa quem

Se a resposta esta nesses 4 arquivos, **NAO abra nenhum outro arquivo do codigo**.

## REGRA #2 - Use o grafo como indice

Quando precisar entender uma funcao, classe, tabela, rota, modulo:
1. Procure o nome em `docs/graphify/symbols.md`
2. Veja em qual arquivo esta e suas dependencias em `docs/graphify/dependencies.md`
3. So entao abra o arquivo de origem

Nunca faca busca recursiva de arquivos antes de consultar o grafo.

## REGRA #3 - Atualizou codigo? O grafo se regenera sozinho

O grafo e regenerado automaticamente pelo workflow `.github/workflows/graphify.yml`:
- A cada push na branch principal
- Toda madrugada (cron 6h UTC = 3h Brasil)

Nao precisa atualizar o grafo manualmente. Pode estar ate 24h defasado se voce acabou de mudar muita coisa - nesse caso, dispare o workflow manualmente em Actions > Graphify > Run workflow.

---

<!-- GRAPHIFY-START -->
## Grafo de Conhecimento Graphify

**Pasta do grafo:** `docs/graphify/`

**Arquivos disponiveis (apos primeira execucao do workflow):**
- `index.md` - mapa hierarquico (ler PRIMEIRO)
- `wiki.md` - wiki em linguagem natural
- `symbols.md` - todos os simbolos do projeto
- `dependencies.md` - grafo de dependencias
- `clusters.md` - modulos agrupados (Leiden clustering)
- `vault/` - vault Obsidian para navegacao visual

**Pasta do grafo bruto** (nao editar): `.graphify/graph.json`
<!-- GRAPHIFY-END -->

---

## Padroes do projeto - Skills aplicaveis

Veja `.claude/skills.md` para a lista de skills que voce DEVE seguir aqui.

Principios obrigatorios em TODO projeto deste usuario:

- **Excelencia total**: tudo e importante, nada e secundario. Nao julgar prioridades.
- **Automacao total**: usuario e leigo. Acoes manuais devem virar botoes em interface web.
- **Scrum microsprints**: 1 detalhe = 1 sprint. PDCA a cada ciclo.
- **Testes completos**: testar cada campo, botao, rota individualmente.
- **Documentacao continua**: atualizar este CLAUDE.md ao final de cada sessao.
- **Versionamento**: SemVer (MAJOR.MINOR.PATCH).
- **Padrao PT-BR**: variaveis, comentarios, mensagens, commits em portugues. UTF-8. Timezone America/Sao_Paulo.

## Entrega obrigatoria ao final de cada tarefa

- [ ] Codigo completo (nao so a parte principal)
- [ ] Testes executados (nao so os principais)
- [ ] CLAUDE.md atualizado com aprendizados
- [ ] GitHub sincronizado (commit + push)
- [ ] Deploy em producao executado
- [ ] Validacao final em producao feita
- [ ] Grafo Graphify regenerado (workflow automatico cuida disso)

---

> Configurado automaticamente em $(date) pelo orquestrador Graphify.
