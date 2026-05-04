<!--
  Graphify Knowledge Graph - Adaptado para Claude.ai (web)
  Mantido pelo workflow .github/workflows/graphify.yml
-->

# CLAUDE.md - Instrucoes de Contexto

> **Este arquivo e a primeira coisa que o Claude le neste projeto.**

## REGRA #1 - Antes de ler QUALQUER arquivo

**Voce (Claude) DEVE consultar primeiro estes arquivos do grafo, NESTA ORDEM:**

1. `graphify-out/GRAPH_REPORT.md` - relatorio com God Nodes, Communities, Surprising Connections
2. `graphify-out/manifest.json` - lista de arquivos analisados
3. `graphify-out/graph.json` - grafo completo (nodes, links, communities)

Se a resposta esta nesses arquivos, NAO abra nenhum outro arquivo do codigo.

## REGRA #2 - Use o grafo como indice

Para entender uma funcao, classe, modulo, fluxo:
1. Procure o nome dentro de `graphify-out/graph.json` (nodes[].label)
2. Veja conexoes (links)
3. Confira "God Nodes" em `graphify-out/GRAPH_REPORT.md`
4. So entao abra o arquivo de origem (source_file)

Nunca faca busca recursiva antes de consultar o grafo.

## REGRA #3 - Visualizacao

Para o usuario explorar:
- `graphify-out/graph.html` - grafo interativo
- `graphify-out/GRAPH_TREE.html` - arvore expansivel

## REGRA #4 - O grafo se regenera sozinho

Workflow `.github/workflows/graphify.yml` roda:
- A cada push (regenera automaticamente)
- Toda madrugada (cron 6h UTC = 3h Brasil)
- Manualmente em Actions > Graphify > Run workflow

Comando: `graphify update .` (sem LLM, sem custo de API).

---

## Padroes do projeto

Veja `.claude/skills.md` para skills aplicaveis.

Principios obrigatorios em TODO projeto:
- **Excelencia total**: tudo e importante. Nao julgar prioridades.
- **Automacao total**: usuario e leigo. Acoes manuais devem virar botoes na UI.
- **Scrum microsprints**: 1 detalhe = 1 sprint. PDCA a cada ciclo.
- **Testes completos**: testar cada campo, botao, rota.
- **Documentacao continua**: atualizar este CLAUDE.md ao final.
- **Versionamento**: SemVer (MAJOR.MINOR.PATCH).
- **Padrao PT-BR**: variaveis, comentarios, mensagens, commits em portugues. UTF-8. Timezone America/Sao_Paulo.

## Entrega obrigatoria ao final

- [ ] Codigo completo
- [ ] Testes executados
- [ ] CLAUDE.md atualizado
- [ ] GitHub sincronizado
- [ ] Deploy em producao executado
- [ ] Validacao em producao feita
- [ ] Grafo Graphify regenerado (workflow cuida)
