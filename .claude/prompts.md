# Prompts e Templates - fmunizmcorp/gpt-drive-action

> Templates reutilizaveis para tarefas comuns deste projeto.
> Cole no inicio da conversa com Claude para ativar contexto especifico.

## Template 1: Comeco de sessao

```
Trabalhando em fmunizmcorp/gpt-drive-action. Como Engenheiro de GitHub Actions + Integracao GPT/Drive.
Leia CLAUDE.md, .claude/orquestrador.md, docs/APRENDIZADOS.md e docs/HISTORICO.md.
Em seguida, leia graphify-out/GRAPH_REPORT.md.
Reporte se o grafo esta defasado (ultimo run > 1 dia atras).

Minha demanda: <DEMANDA>
```

## Template 2: Implementacao de feature

```
Feature nova em fmunizmcorp/gpt-drive-action: <DESCRICAO>

Protocolo:
1. Liste TODAS as microsprints necessarias (granularidade fina)
2. Execute uma por uma, testando individualmente
3. PDCA a cada 5-10 sprints
4. Atualize docs/APRENDIZADOS.md ao final
5. Incremente versao (SemVer) em todos os locais
6. Commit + push + deploy
7. Validar em producao

Devo respeitar excelencia-total: tudo importa, nada parcial.
```

## Template 3: Bug fix

```
Bug em fmunizmcorp/gpt-drive-action: <DESCRICAO + STACK TRACE / SCREENSHOT>

1. Reproduzir o bug localmente (ou em ambiente equivalente)
2. Consultar docs/APRENDIZADOS.md (esse bug ja apareceu antes?)
3. Localizar via graph.json (nao varrer arquivos)
4. Corrigir + teste de regressao
5. Documentar a causa raiz em docs/APRENDIZADOS.md
6. Incrementar PATCH no SemVer
7. Deploy + validacao em producao
```

## Template 4: Auditoria/revisao

```
Auditoria em fmunizmcorp/gpt-drive-action: <ESCOPO>

Use graphify-out/GRAPH_REPORT.md como mapa.
Confira:
- God Nodes alinhados com regras de negocio
- Communities coesas (alta cohesao interna, baixa entre comunidades)
- Surprising Connections (alertas)
- Knowledge Gaps

Reportar achados em docs/APRENDIZADOS.md.
```

## Template 5: Deploy e validacao

```
Deploy em fmunizmcorp/gpt-drive-action: versao <X.Y.Z>

Checklist obrigatorio:
- [ ] Todos os testes passando
- [ ] CHANGELOG atualizado
- [ ] CLAUDE.md/docs atualizados
- [ ] Versao sincronizada em todos os locais
- [ ] commit + push
- [ ] GitHub Actions verde
- [ ] Acesso a URL de producao validado
- [ ] Funcionalidade nova testada em producao
- [ ] docs/HISTORICO.md atualizado
```

## Template 7: Atualizacao de skills

```
Descobri novo padrao em fmunizmcorp/gpt-drive-action que vale virar skill.

Processo:
1. Documentar em docs/APRENDIZADOS.md
2. Se aplicavel a outros projetos: criar nova skill base
3. Se especifico deste projeto: anexar em .claude/skills.md (secao "Especificas")
4. Atualizar este arquivo de prompts se for um novo template
```

