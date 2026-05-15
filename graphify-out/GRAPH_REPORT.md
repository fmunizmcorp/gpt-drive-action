# Graph Report - gpt-drive-action  (2026-05-15)

## Corpus Check
- 7 files · ~3,368 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 136 nodes · 152 edges · 12 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ff00709`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `CLAUDE.md - fmunizmcorp/gpt-drive-action` - 13 edges
2. `paths` - 10 edges
3. `ATENCAO CLAUDE - LEIA E OBEDECA ESTE BLOCO ANTES DE QUALQUER OUTRA COISA` - 10 edges
4. `responses` - 9 edges
5. `auth` - 7 edges
6. `operationId` - 6 edges
7. `10. CHECKLIST DE ENTREGA OBRIGATORIO` - 6 edges
8. `post` - 5 edges
9. `post` - 5 edges
10. `patch` - 5 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (12 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (12): ATENCAO CLAUDE - LEIA E OBEDECA ESTE BLOCO ANTES DE QUALQUER OUTRA COISA, Fluxo padrao quando o usuario pede arquivo, Padroes Brasil obrigatorios em cada arquivo gerado, REGRA 0 - VOCE E O LIDER + ORQUESTRADOR DESTE REPO. ATIVO. AGORA., REGRA -1 - O USUARIO E LEIGO. NUNCA PERGUNTE SOBRE PERSONA, SKILL OU CONFIGURACAO., REGRA 1 - SKILLS BASAIS - SEMPRE ON. NAO PERGUNTE. NAO ESCOLHA., REGRA 2.5 - GERACAO DE ARQUIVOS (Excel, PDF, DOCX, PPTX) - SKILLS XLSX/PDF/DOCX/PPTX, REGRA 2 - SKILLS CONDICIONAIS PARA REPO DE DESENVOLVIMENTO (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.1
Nodes (20): 11. REFERENCIAS RAPIDAS, 1. IDENTIDADE DO PROJETO, 2. SEU PAPEL - ORQUESTRADOR, 3. SQUAD DE IAs (skills aplicaveis), 4. METODOLOGIA DE TRABALHO, 5. CONHECIMENTO ESPECIFICO DO PROJETO, 6. STACK TECNOLOGICO (de `package.json`), 9. APRENDIZADO E ATUALIZACAO CONTINUA (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (6): 10. CHECKLIST DE ENTREGA OBRIGATORIO, Codigo, Deploy, Documentacao, Sinalizar conclusao, Testes

### Community 3 - "Community 3"
Cohesion: 0.4
Nodes (3): app, express, url

### Community 4 - "Community 4"
Cohesion: 0.4
Nodes (5): 7. ESTRUTURA DO REPO, Arquivos da raiz (amostra), code:block2 (.claude), code:block3 (.gitignore), Diretorios principais

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (4): Aprendizados, Aprendizados - fmunizmcorp/gpt-drive-action, Como usar, YYYY-MM-DD - Titulo do aprendizado [#categoria]

### Community 6 - "Community 6"
Cohesion: 0.4
Nodes (4): Como usar, Historico, Historico de Sessoes - fmunizmcorp/gpt-drive-action, YYYY-MM-DD - vX.Y.Z - Titulo da sessao

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (22): description, description, schema, application/json, post, post, patch, operationId (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.11
Nodes (18): api, is_user_authenticated, type, url, auth, authorization_content_type, authorization_url, client_url (+10 more)

### Community 9 - "Community 9"
Cohesion: 0.2
Nodes (18): description, get, get, get, get, operationId, parameters, responses (+10 more)

### Community 10 - "Community 10"
Cohesion: 0.17
Nodes (11): dependencies, express, node-fetch, engines, node, main, name, scripts (+3 more)

### Community 11 - "Community 11"
Cohesion: 0.33
Nodes (5): info, title, version, openapi, servers

## Knowledge Gaps
- **72 isolated node(s):** `openapi`, `title`, `version`, `servers`, `description` (+67 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CLAUDE.md - fmunizmcorp/gpt-drive-action` connect `Community 1` to `Community 0`, `Community 2`, `Community 4`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Why does `paths` connect `Community 9` to `Community 11`, `Community 7`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `openapi`, `title`, `version` to the rest of the system?**
  _72 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 7` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 8` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._