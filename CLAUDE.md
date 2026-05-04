<!--
  =====================================================================
  GRAPHIFY - Bloco de instrucoes obrigatorias (gerado automaticamente)
  Colocado AQUI NO TOPO para que o Claude.ai web siga sem dica adicional.
  Workflow .github/workflows/graphify.yml mantem o grafo atualizado.
  =====================================================================
-->

# CLAUDE.md - Instrucoes Mestras

> **VOCE (Claude) DEVE LER ESTE ARQUIVO INTEIRO ANTES DE FAZER QUALQUER COISA.**
> **Em seguida, OBRIGATORIAMENTE consultar os arquivos listados abaixo.**

## ZERO. PROTOCOLO DE ATIVACAO (executar SEMPRE no inicio da conversa)

Voce DEVE ler nesta ordem antes de responder o usuario:

1. **Este CLAUDE.md inteiro** (regras, contexto, conhecimento)
2. **`graphify-out/GRAPH_REPORT.md`** - mapa do codigo (God Nodes, Communities, conexoes)
3. **`graphify-out/manifest.json`** - lista de arquivos analisados
4. **`.claude/skills.md`** - skills aplicaveis a este projeto
5. **(opcional) `graphify-out/graph.json`** - grafo estruturado para localizar simbolos

So abra outros arquivos APOS consultar o grafo. Use `graph.json` como indice. Nunca varra a arvore de arquivos.

Se algum desses arquivos nao existir, AVISE o usuario que o repo precisa rodar
o workflow Graphify ou que o grafo esta defasado.

## ZERO.1 PROTOCOLO DE EXCELENCIA (sempre vale)

- **Tudo e importante**: nao julgar prioridades. Ordenar so por dependencia tecnica.
- **Nada parcial**: completar 100% antes de seguir. Nada de "principal primeiro".
- **Nao perguntar no meio**: seguir ate o final, relatar erros e tratar imediatamente.
- **Microsprints**: 1 detalhe = 1 sprint. PDCA a cada ciclo de 5-10 sprints.
- **Testes completos**: testar cada campo, botao, rota, link individualmente.
- **PT-BR obrigatorio**: variaveis, comentarios, mensagens, commits em portugues.
- **UTF-8 + timezone America/Sao_Paulo**.
- **Validacoes Brasil quando aplicavel**: CPF, CNPJ, CEP, telefone.
- **LGPD prioritaria** para dados pessoais.
- **Versionamento**: SemVer (MAJOR.MINOR.PATCH) atualizado em todos os locais.
- **Documentacao continua**: atualizar este CLAUDE.md ao final de cada sessao.
- **GitHub + deploy**: commit + push + deploy + validacao final em producao.

## ZERO.2 SKILLS APLICAVEIS

Veja `.claude/skills.md` para a lista completa. Resumo basal (sempre validas):
`excelencia-total`, `scrum-microsprints`, `documentacao-continua`,
`versionamento-sistema`, `testes-completos`. Skills condicionais e
tecnologia-especificas listadas em `.claude/skills.md`.

---

## 1. IDENTIDADE DO PROJETO

- **Repositorio:** `fmunizmcorp/gpt-drive-action`
- **Tamanho:** ~30 KB
- **Skill stack:** generico
- **Visualizacao:** `graphify-out/graph.html` e `graphify-out/GRAPH_TREE.html`

## 2. GOD NODES (estrutura central detectada pelo grafo)



## 3. COMMUNITIES (modulos detectados)



## 4. CONTEXTO DO PROJETO

Este repo nao tinha CLAUDE.md previo nem README significativo.
Use o GRAPH_REPORT.md e os arquivos listados em manifest.json para entender o codigo.

## 5. STACK / DEPENDENCIAS (de `package.json`)

```
{
  "name": "gpt-drive-action",
  "version": "1.0.0",
  "main": "index.js",
  "type": "commonjs",
  "engines": { "node": "20.x" },
  "scripts": { "start": "node index.js" },
  "dependencies": {
    "express": "^4.19.2",
    "node-fetch": "^3.3.2"
  }
}

```

## 6. ESTRUTURA DA RAIZ

```
.claude
.github
.gitignore
.nvmrc
CLAUDE.md
graphify-out
index.js
manifest.json
openapi.json
package.json
```

---

## ENTREGA OBRIGATORIA AO FINAL DE CADA TAREFA

- [ ] Codigo completo (nao so a parte principal)
- [ ] Testes executados em cada detalhe
- [ ] Este CLAUDE.md atualizado com aprendizados
- [ ] CHANGELOG ou docs atualizados
- [ ] Versao incrementada em todos os locais (SemVer)
- [ ] commit + push para GitHub
- [ ] Deploy em producao executado
- [ ] Validacao final em producao
- [ ] Grafo Graphify regenerado (workflow automatico cuida)

---

> **Versao deste CLAUDE.md:** v2 - Graphify integrado em 2026-05-04
> **Mantido por:** workflow .github/workflows/graphify.yml + edicao manual quando necessario
