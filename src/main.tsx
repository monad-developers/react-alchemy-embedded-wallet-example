import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'

import { AlchemyProviders } from './AlchemyProviders.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AlchemyProviders>
			<App />
		</AlchemyProviders>
	</StrictMode>,
)
