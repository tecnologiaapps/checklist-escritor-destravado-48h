# 🎨 GUIA RÁPIDO DE PERSONALIZAÇÃO

## Como Adicionar Imagens dos Símbolos/PDF

Você mencionou que vai enviar um PDF com símbolos e imagens. Aqui está como adicionar:

### Método 1: Imagens como Decoração nos Pontos

1. Salve as imagens do PDF como arquivos `.png` ou `.jpg`
2. Coloque os arquivos na pasta do projeto
3. Abra o arquivo `index.html`
4. Encontre o ponto onde quer adicionar a imagem
5. Adicione este código dentro do `<div class="content-text">`:

```html
<div style="text-align: center; margin: 15px 0;">
    <img src="nome-da-imagem.png" alt="Símbolo" style="max-width: 150px; height: auto;">
</div>
```

### Método 2: Ícone no Cabeçalho de Cada Item

Para adicionar um ícone pequeno ao lado do número:

```html
<span class="item-number">
    <img src="icone.png" style="width: 20px; height: 20px; margin-right: 5px;">
    1.
</span>
```

### Método 3: Logo no Cabeçalho Principal

Para adicionar uma logo no topo do app:

1. Abra `index.html`
2. Encontre a seção `<header class="header">`
3. Adicione antes do `<h1>`:

```html
<div style="text-align: center; margin-bottom: 10px;">
    <img src="logo.png" alt="Logo" style="max-width: 120px; height: auto;">
</div>
```

---

## Personalizações Mais Comuns

### 1. Mudar Cor Principal de #fc8337 para Outra

Abra `style.css` e use Localizar/Substituir (Ctrl+H):

- **Localizar:** `#fc8337`
- **Substituir por:** `#SUA-COR` (exemplo: `#3498db` para azul)

### 2. Adicionar Introdução Personalizada

Abra `index.html` e encontre a seção `<section class="intro-section">`.

Você pode adicionar mais parágrafos, listas ou imagens:

```html
<p>Seu novo parágrafo aqui.</p>
<ul>
    <li>Item de lista</li>
    <li>Outro item</li>
</ul>
```

### 3. Alterar Quantidade de Itens do Checklist

Se no futuro quiser ter mais ou menos itens:

1. **Em `index.html`:** Adicione ou remova blocos `<div class="checklist-item">`
2. **Em `script.js`:** Altere a linha `const TOTAL_ITEMS = 22;` para o novo número

### 4. Mudar Nome do App

Altere em 3 lugares:

1. **index.html:** `<title>` e `<h1>`
2. **manifest.json:** `"name"` e `"short_name"`
3. **README.md:** Título principal

---

## Estrutura de um Item do Checklist

Cada item segue este padrão (útil para copiar e criar novos):

```html
<div class="checklist-item" data-item="NÚMERO">
    <div class="item-header">
        <input type="checkbox" id="check-NÚMERO" class="checkbox">
        <label for="check-NÚMERO" class="item-title">
            <span class="item-number">NÚMERO.</span>
            TÍTULO DO ITEM
        </label>
        <button class="expand-btn" data-target="NÚMERO">▼</button>
    </div>
    <div class="item-content" id="content-NÚMERO">
        <div class="content-text">
            <p>Conteúdo do item aqui...</p>
        </div>
        <div class="notes-section">
            <label class="notes-label">
                📝 Suas anotações:
                <span class="notes-indicator" id="indicator-NÚMERO"></span>
            </label>
            <textarea 
                class="notes-textarea" 
                id="notes-NÚMERO" 
                placeholder="Adicione suas anotações aqui..."
                rows="4"></textarea>
        </div>
    </div>
</div>
```

**Lembre-se:** Substitua todos os `NÚMERO` pelo número sequencial do item.

---

## Classes CSS Importantes

Se quiser criar novos estilos ou modificar:

```css
.header { }              /* Cabeçalho fixo no topo */
.progress-bar { }        /* Barra de progresso */
.intro-section { }       /* Seção de introdução */
.checklist-item { }      /* Card de cada item */
.checkbox { }            /* Checkbox customizado */
.item-title { }          /* Título do item */
.expand-btn { }          /* Botão de expandir */
.content-text { }        /* Área de conteúdo */
.notes-textarea { }      /* Campo de anotações */
.btn-reset { }           /* Botão resetar */
.btn-top { }             /* Botão voltar ao topo */
```

---

## Testar Localmente

Antes de publicar, você pode testar no seu computador:

1. Abra o arquivo `index.html` diretamente no navegador
2. Teste todas as funcionalidades
3. Verifique se está salvando no navegador
4. Teste em modo mobile (F12 → Toggle device toolbar)

---

## Dicas Importantes

✅ **Sempre faça backup** antes de fazer mudanças grandes  
✅ **Teste depois de cada alteração** para ver se quebrou algo  
✅ **Use comentários no código** para lembrar o que fez  
✅ **As imagens devem ser leves** (PNG ou JPG, menos de 500KB cada)  
✅ **Nomes de arquivo sem espaços** (use `-` ou `_`)

---

## Próximos Passos

1. ✅ Adicione as imagens/símbolos do PDF
2. ✅ Teste tudo no celular
3. ✅ Publique no GitHub Pages
4. ✅ Compartilhe o link com seus clientes

Pronto! Seu app está completo e pronto para impressionar! 🚀
