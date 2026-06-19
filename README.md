# Dashboard P5.JS - Website Interativo

## 📋 Descrição

Um website moderno e responsivo desenvolvido com **HTML**, **CSS**, **JavaScript** e **p5.js**. Apresenta um dashboard interativo com visualizações dinâmicas, menu otimizado, seções de estatísticas e elementos visuais atraentes.

## 🎯 Características

✅ **Layout Otimizado** - Design moderno e responsivo
✅ **Menu Responsivo** - Hamburger menu para dispositivos móveis
✅ **Dashboard Interativo** - Estatísticas e métricas em tempo real
✅ **Visualização com P5.JS** - Gráfico interativo e animado
✅ **Seção de Itens** - Cards com funcionalidades
✅ **Rodapé Completo** - Links e informações
✅ **Animações Suaves** - Transições e efeitos visuais
✅ **Formulário de Contato** - Sistema de mensagens
✅ **Mobile First** - Totalmente responsivo

## 📁 Estrutura de Diretórios

```
website-p5js/
├── index.html              # Arquivo HTML principal
├── css/
│   ├── style.css          # Estilos principais
│   └── responsive.css     # Estilos responsivos
├── js/
│   ├── main.js            # Scripts principais e interatividade
│   └── sketch.js          # Visualização com p5.js
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/krausejoao-cmyk/Alura2.git
cd Alura2
git checkout feature/website-p5js
```

### 2. Abrir no Navegador

Simples! Basta abrir o arquivo `index.html` no seu navegador:

```bash
open index.html
# ou
start index.html
```

### 3. Usar com Live Server (Recomendado)

Se você tem o VS Code instalado:

1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 🎨 Seções do Website

### 1. Header
- Logo com gradiente
- Menu de navegação responsivo
- Hamburger menu para mobile

### 2. Home (Hero)
- Seção de boas-vindas com gradiente
- Call-to-action (CTA)

### 3. Dashboard
- 4 cards de estatísticas
- Efeitos hover animados
- Números destacados

### 4. Visualização P5.JS
- Gráfico interativo com partículas
- Responde ao movimento do mouse
- Conexão dinâmica entre elementos

### 5. Itens
- 6 cards com ícones e descrições
- Grid responsivo
- Efeitos de hover

### 6. Contato
- Formulário com validação
- Notificações de envio
- Design limpo e intuitivo

### 7. Footer
- Informações da empresa
- Links rápidos
- Redes sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
- **JavaScript** - Interatividade e funcionalidades
- **p5.js** - Visualizações interativas e gráficos

## 📱 Responsividade

O website é totalmente responsivo:

- **Desktop** (1200px+) - Layout completo
- **Tablet** (768px - 1199px) - Layout adaptado
- **Mobile** (480px - 767px) - Menu hambúrguer
- **Ultra Mobile** (< 480px) - Otimizado para telas pequenas

## 🎯 Variáveis CSS Personalizáveis

Localizadas em `css/style.css`:

```css
:root {
    --primary-color: #0066ff;       /* Azul primário */
    --secondary-color: #ff6600;     /* Laranja secundário */
    --dark-bg: #0f0f0f;            /* Fundo escuro */
    --light-bg: #ffffff;           /* Fundo claro */
    --text-dark: #1a1a1a;          /* Texto escuro */
    --text-light: #ffffff;         /* Texto claro */
}
```

## 🔧 Personalizações

### Mudar Cores
Edite as variáveis CSS em `css/style.css` na seção `:root`

### Modificar Partículas P5.JS
Edite o arquivo `js/sketch.js`:
- `numParticles` - Número de partículas
- `mouseInfluence` - Raio de influência do mouse

### Adicionar Novo Conteúdo
1. Adicione uma nova seção em `index.html`
2. Crie estilos correspondentes em `css/style.css`
3. Adicione funcionalidades em `js/main.js` se necessário

## 📈 Performance

- ✅ Carregamento rápido
- ✅ Otimizado para móveis
- ✅ Sem dependências pesadas
- ✅ CSS otimizado
- ✅ Animações com GPU acceleration

## 🐛 Troubleshooting

### P5.JS não carrega
- Verifique se o CDN está acessível
- Tente recarregar a página

### Menu não funciona em mobile
- Limpe o cache do navegador
- Verifique se JavaScript está habilitado

### Formulário não envia
- Este é um exemplo sem backend
- Implemente uma solução real se necessário

## 📝 Licença

Este projeto está disponível sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 👨‍💻 Autor

Desenvolvido por **João Krause** - 2026

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no website ou nos siga nas redes sociais.

---

⭐ Se gostou do projeto, não esqueça de dar uma estrela!
