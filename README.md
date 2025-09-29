# Code Export Frontend

A modern, responsive React TypeScript application featuring a sophisticated code export interface with HTML/CSS and Next.js project options.

## 🚀 Features

### Core Functionality
- *Dual Export Options*: Support for both HTML & CSS and Next.js project exports
- *Interactive Checkboxes*: Customizable export settings for each project type
- *Loading States*: Professional loading spinner with disabled interactions during download
- *Tab Locking*: Prevents tab switching during active downloads

### User Interface
- *Modern Design*: Dark theme with professional styling and smooth gradients
- *Custom Icons*: React and HTML5 icons for visual project identification
- *Animated Transitions*: Smooth tab switching with CSS animations
- *Responsive Layout*: Mobile-first design supporting all screen sizes

### Technical Highlights
- *TypeScript*: Full type safety and modern React patterns
- *Custom Hooks*: State management for checkboxes and loading states
- *CSS Variables*: Consistent theming with CSS custom properties
- *Accessibility*: Keyboard navigation and focus management
- *Performance*: Optimized rendering and minimal re-renders

## 📱 Responsive Breakpoints

- *Desktop*: 768px and above
- *Tablet*: 768px - 481px
- *Mobile*: 480px - 321px
- *Small Mobile*: 320px and below

## 🛠 Technologies Used

- *React 18* with TypeScript
- *Vite* for build tooling and development server
- *CSS3* with modern features (Grid, Flexbox, Custom Properties)
- *Google Fonts* (Kumbh Sans, Nunito Sans)
- *ESLint* for code quality

## 📦 Installation

1. *Clone the repository*
   bash
   git clone <repository-url>
   cd my-app
   

2. *Install dependencies*
   bash
   npm install
   

3. *Start development server*
   bash
   npm run dev
   

4. *Build for production*
   bash
   npm run build
   

## 🎯 Project Structure


src/
├── components/
│   ├── export.tsx          # Main export page component
│   └── popup.tsx           # Export options modal
├── styles/
│   ├── export.css          # Main page styling
│   ├── popup.css           # Modal styling
│   └── index.css           # Global styles
├── main.tsx                # App entry point
└── App.tsx                 # Root component


## 🎨 Design Features

### Export Options Modal
- *Tab Selector*: Animated tab switching between HTML & CSS and Next.js
- *Export Statements*: Project type indicators with custom icons
- *Checkbox Controls*: 
  - HTML & CSS: Include assets, Include custom code
  - Next.js: Use app directory, Include assets locally, Include custom code
- *Download Button*: Responsive with loading states and animations

### Styling System
- *CSS Variables*: Consistent color palette with neutral tones
- *Typography*: Professional font hierarchy with Kumbh Sans and Nunito Sans
- *Animations*: Smooth transitions and micro-interactions
- *Shadows*: Layered shadow system for depth

## ⚡ Performance Features

- *Lazy Loading*: Components loaded on demand
- *CSS Optimization*: Minimal bundle size with efficient selectors
- *State Management*: Optimized React state updates
- *Font Loading*: Optimized Google Fonts loading strategy

## 🔧 Customization

### Theme Colors
Edit CSS variables in popup.css:
css
:root {
  --Neutral-Neutral750: #292929;
  --Neutral-Neutral800: #1F1F1F;
  --Neutral-Neutral50: #F6F6F6;
  --Primary-Primary500: #665DC0;
}


### Export Options
Modify checkbox options in popup.tsx:
typescript
const [checkedItems, setCheckedItems] = useState({
  includeAssets: false,
  includeCustomCode: false,
  useAppDirectory: false
});


## 📱 Mobile Optimizations

- *Touch Targets*: Minimum 44px for mobile accessibility
- *Responsive Typography*: Scales appropriately across devices
- *Gesture Support*: Touch-friendly interactions
- *Viewport Optimization*: Proper mobile viewport handling

## 🚀 Deployment

### Build Commands
bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint


### Environment Setup
- *Node.js*: 18+ recommended
- *Package Manager*: npm or yarn
- *Browser Support*: Modern browsers (ES2020+)

## 🎯 Future Enhancements

- [ ] Actual file download implementation
- [ ] Progress tracking for downloads
- [ ] Export history and settings persistence
- [ ] Additional export formats (Vue, Angular, etc.)
- [ ] Drag & drop file uploads
- [ ] Real-time preview generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit changes (git commit -m 'Add amazing feature')
4. Push to branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

Created with ❤ for modern web development practices and user experience excellence.

---

## 📞 Support

For questions or support, please open an issue on the GitHub repository.

*Built with modern web technologies and attention to detail* 🚀
