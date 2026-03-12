import './style.css'
import { setupListPage } from './pages/list.ts'
import { setupDetailPage } from './pages/detail.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

function navigate() {
  const hash = window.location.hash
  if (hash.startsWith('#detail/')) {
    const id = hash.split('/')[1]
    setupDetailPage(app, id)
  } else {
    setupListPage(app)
  }
}

window.addEventListener('hashchange', navigate)
navigate()
