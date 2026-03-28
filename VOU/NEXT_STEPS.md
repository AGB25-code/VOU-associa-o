# 🚀 Próximos Passos - VO.U. Website

## ✅ O Que Já Está Pronto

O website moderno e responsivo da VO.U. está **completamente desenvolvido** com:

- ✅ 6 páginas HTML totalmente funcionais
- ✅ Sistema de design CSS moderno e responsivo
- ✅ JavaScript com todas as funcionalidades interativas
- ✅ Formulário multi-step com validação
- ✅ Animações e efeitos visuais
- ✅ Navegação mobile e desktop
- ✅ Documentação completa

---

## 📋 O Que Precisa de Fazer Agora

### 1. **Adicionar Imagens Reais** (PRIORITÁRIO)

As imagens são referenciadas mas precisam ser adicionadas:

```
images/
├── hero/
│   ├── hero-volunteers.jpg        # Homepage hero (1920x1080px)
│   ├── projects-hero.jpg          # Projetos hero
│   ├── about-hero.jpg             # Sobre hero
│   ├── nucleos-hero.jpg           # Núcleos hero
│   ├── join-hero.jpg              # Inscrições hero
│   └── contact-hero.jpg           # Contactos hero
│
└── projects/
    ├── vou-formar.jpg             # 800x600px cada
    ├── vou-pela-natureza.jpg
    ├── vou-acompanhar.jpg
    ├── vou-cuidar.jpg
    ├── vou-dancar.jpg
    ├── vou-criar.jpg
    ├── vou-com-saude.jpg
    ├── vou-pelos-direitos.jpg
    ├── vou-com-animais.jpg
    └── vou-cultura.jpg
```

**Fontes de Imagens Gratuitas:**
- [Unsplash](https://unsplash.com) - Pesquise: "volunteers", "community", "nature"
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

**Ou use as vossas próprias fotos** dos projetos e eventos!

---

### 2. **Atualizar Informações de Contacto**

Procure e substitua em **TODOS os ficheiros HTML**:

```html
<!-- Substituir: -->
geral@vou-associacao.pt
Porto, Portugal
https://facebook.com/vouassociacao
https://instagram.com/vouassociacao
https://linkedin.com/company/vouassociacao

<!-- Por: -->
[SEU EMAIL REAL]
[ENDEREÇO COMPLETO]
[LINKS REAIS DAS REDES SOCIAIS]
```

---

### 3. **Configurar Backend para Formulários**

Atualmente, os formulários apenas mostram mensagens no console. Para funcionar:

#### Opção A: Netlify Forms (MAIS FÁCIL)

1. Faça deploy no Netlify
2. Adicione `data-netlify="true"` nos formulários
3. Pronto! Recebe emails automaticamente

#### Opção B: FormSpree

1. Registe-se em [formspree.io](https://formspree.io)
2. Adicione ao formulário:
```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

#### Opção C: Backend Próprio

Ver código comentado em `js/main.js` linhas 250+ e 350+

---

### 4. **Adicionar Google Analytics** (Opcional)

Antes de `</head>` em todas as páginas:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 5. **Criar Favicon**

1. Crie um ícone 512x512px com o logo VO.U.
2. Use [favicon.io](https://favicon.io) para gerar todos os tamanhos
3. Coloque os ficheiros na raiz e atualize em todas as páginas

---

### 6. **Testar Tudo**

#### No Computador:

```bash
# Abrir com servidor local
python -m http.server 8000
# Ou
npx http-server -p 8000
```

Visite: `http://localhost:8000`

#### Teste:

- [ ] Navegação funciona em todas as páginas
- [ ] Menu mobile abre/fecha corretamente
- [ ] Formulário de inscrição completa todos os 3 passos
- [ ] Formulário de contacto pode ser preenchido
- [ ] Estatísticas animam ao fazer scroll
- [ ] Todos os links funcionam
- [ ] Botão "Voltar ao topo" aparece ao fazer scroll

#### Teste em Dispositivos:

- [ ] Telemóvel (iPhone, Android)
- [ ] Tablet (iPad, Samsung)
- [ ] Desktop (Chrome, Firefox, Safari)

---

### 7. **Deploy (Colocar Online)**

#### Recomendado: Netlify

1. Vá a [netlify.com](https://netlify.com)
2. Arrastar pasta `VO.U` para o site
3. Configure domínio personalizado (se tiver)
4. Pronto! Site online em segundos

#### Alternativa: Vercel

```bash
npm i -g vercel
cd VO.U
vercel
```

#### Alternativa: GitHub Pages

1. Crie repositório no GitHub
2. Faça upload dos ficheiros
3. Settings → Pages → ative
4. Site disponível em: `username.github.io/repo-name`

---

## 🎨 Personalização (Opcional)

### Mudar Cores

Edite `css/variables.css`:

```css
:root {
  --color-primary: #2D5F8D;      /* Azul principal */
  --color-secondary: #F7941D;    /* Laranja */
}
```

### Mudar Fontes

Edite `css/main.css` linha 8 e `css/variables.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=NOVA_FONTE&display=swap');

--font-primary: 'NOVA_FONTE', sans-serif;
```

---

## 🐛 Resolução de Problemas

### "As imagens não aparecem"

- Verifique se os ficheiros estão na pasta `images/`
- Verifique se os nomes correspondem aos do HTML
- Caminhos são case-sensitive: `Hero.jpg` ≠ `hero.jpg`

### "Menu mobile não abre"

- Verifique se `js/main.js` está carregado
- Abra consola do navegador (F12) e veja erros

### "Formulário não envia"

- Normal! Precisa configurar backend (ver passo 3)
- Atualmente só mostra mensagem de sucesso local

### "Site lento"

- Otimize imagens (use [TinyPNG](https://tinypng.com))
- Converta para WebP
- Tamanho recomendado: Hero <500KB, Projetos <200KB cada

---

## 📊 Checklist Final Antes de Publicar

- [ ] Todas as imagens adicionadas
- [ ] Contactos atualizados
- [ ] Links de redes sociais corretos
- [ ] Formulários funcionam (com backend configurado)
- [ ] Testado em mobile
- [ ] Testado em diferentes navegadores
- [ ] Google Analytics configurado
- [ ] Favicon criado
- [ ] Sem erros na consola (F12)
- [ ] Todos os links funcionam
- [ ] SEO: Títulos e descrições atualizados

---

## 📞 Precisa de Ajuda?

### Ficheiros Principais:

- `index.html` - Página inicial
- `css/main.css` - Estilos principais
- `js/main.js` - Funcionalidades JavaScript
- `SITE_PLAN.md` - Documentação completa
- `README.md` - Guia técnico

### Editar Conteúdo:

1. Abra ficheiro `.html` em editor de texto
2. Procure o texto que quer mudar
3. Edite e guarde
4. Recarregue a página no navegador

### Sugestão de Editores:

- **Visual Studio Code** (melhor opção)
- Sublime Text
- Notepad++
- Ou mesmo Bloco de Notas

---

## 🎯 Ordem Recomendada

1. **Dia 1**: Adicionar imagens
2. **Dia 2**: Atualizar contactos e links
3. **Dia 3**: Testar tudo
4. **Dia 4**: Fazer deploy
5. **Dia 5**: Configurar formulários com backend
6. **Dia 6**: Adicionar Google Analytics
7. **Dia 7**: Promover o novo site!

---

## 💡 Dicas Finais

- **Backup**: Guarde sempre uma cópia dos ficheiros originais
- **Git**: Considere usar Git/GitHub para controlo de versões
- **Updates**: Atualize conteúdo regularmente (notícias, projetos)
- **Performance**: Monitore velocidade com Google PageSpeed Insights
- **SEO**: Submeta a Google Search Console após publicar

---

## 🎉 Parabéns!

O website está pronto para uso! Com estas instruções, consegue:

✅ Adicionar conteúdo real
✅ Personalizar design
✅ Colocar online
✅ Gerir e atualizar

**Boa sorte com o lançamento do novo website da VO.U.! 🚀**

---

*Criado com ❤️ para VO.U. - Associação de Voluntariado Universitário*
*Data: 28 de Novembro de 2024*
