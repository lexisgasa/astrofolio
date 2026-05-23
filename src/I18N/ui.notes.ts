export const notesData = {
  es: [
    {
      title: "Resolviendo conflictos Git en Open-Source con POO",
      date: "Mayo 2026",
      excerpt:
        "Integrar actualizaciones de un repositorio upstream en un fork corporativo siempre genera conflictos de merge. En i2CAT, diseñé un patrón de extensión creando archivos `.custom.js`. Extendiendo las clases originales en lugar de modificarlas, logramos cero conflictos al hacer pull de la comunidad.",
      tags: ["Arquitectura", "Git", "POO"],
    },
    {
      title: "Desacoplando la Autenticación con Event-Driven Design",
      date: "Abril 2026",
      excerpt:
        "Para la gestión de OAuth, implementé un enfoque basado en eventos. En lugar de acoplar la UI al gestor de auth, uso `window.open()` para el popup y un bus de eventos global (Pub-Sub) que actúa como message broker. La app reacciona a los eventos de sesión de forma totalmente asíncrona.",
      tags: ["Event-Driven", "OAuth", "Patrones"],
    },
    {
      title: "Optimizando el ciclo de vida en React",
      date: "Marzo 2026",
      excerpt:
        "Aplicando los conceptos de 'Advanced React' de Nadia Makarevich, he estado experimentando con la optimización extrema de re-renders. Mover el estado hacia abajo, usar composición (children prop) y entender cómo el contexto afecta el árbol de renderizado es vital para dashboards complejos.",
      tags: ["React", "Performance", "Frontend"],
    },
  ],
  en: [
    {
      title: "Solving Open-Source Git Conflicts with OOP",
      date: "May 2026",
      excerpt:
        "Integrating upstream updates into a corporate fork always leads to merge conflicts. At i2CAT, I designed an extension pattern using `.custom.js` files. By extending original classes instead of mutating them, we achieved zero conflicts when pulling from the community.",
      tags: ["Architecture", "Git", "OOP"],
    },
    {
      title: "Decoupling Authentication with Event-Driven Design",
      date: "April 2026",
      excerpt:
        "For OAuth management, I implemented an event-based approach. Instead of coupling the UI to the auth manager, I use `window.open()` for the popup and a global event bus (Pub-Sub) acting as a message broker. The app reacts to session events asynchronously.",
      tags: ["Event-Driven", "OAuth", "Patterns"],
    },
    {
      title: "Optimizing React's Lifecycle and Re-renders",
      date: "March 2026",
      excerpt:
        "Applying concepts from Nadia Makarevich's 'Advanced React', I've been experimenting with extreme re-render optimization. Pushing state down, using composition (children prop), and understanding context impact is vital for complex dashboards.",
      tags: ["React", "Performance", "Frontend"],
    },
  ],
  ja: [
    {
      title: "OOPを活用したオープンソースのGitコンフリクト解決",
      date: "2026年 5月",
      excerpt:
        "アップストリームの更新を社内フォークに統合する際、常にマージコンフリクトが発生していました。i2CATでは`.custom.js`ファイルを使用した拡張パターンを設計。元のクラスを直接変更せず拡張することで、コミュニティからのプル時のコンフリクトをゼロにしました。",
      tags: ["アーキテクチャ", "Git", "OOP"],
    },
    {
      title: "イベント駆動型設計（EDD）による認証の疎結合化",
      date: "2026年 4月",
      excerpt:
        "OAuth管理において、イベントベースのアプローチを実装しました。UIを認証マネージャーに密結合させるのではなく、ポップアップに`window.open()`を使用し、メッセージブローカーとして機能するグローバルなイベントバス（Pub-Sub）を利用しています。",
      tags: ["イベント駆動", "OAuth", "デザインパターン"],
    },
    {
      title: "Reactのライフサイクルと再レンダリングの最適化",
      date: "2026年 3月",
      excerpt:
        "Nadia Makarevichの「Advanced React」の概念を適用し、再レンダリングの極限の最適化を検証しています。状態をツリーの下部に移動させ、コンポジション（children prop）を活用し、コンテキストの影響を理解することは複雑なダッシュボードにおいて不可欠です。",
      tags: ["React", "パフォーマンス", "フロントエンド"],
    },
  ],
};
