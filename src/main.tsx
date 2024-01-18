// React Libraries
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

// Third Party Libraries
import { addLocale } from 'primereact/api';

// Local Libraries
import { primeLocales } from '@locales'
import { store } from '@store'

// Local Components
import { AppWrapper } from './AppWrapper.tsx'

// Local Styles
import './index.css'

        

for (const [key, value] of Object.entries(primeLocales)) {
    addLocale(key, value);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppWrapper />
        </Provider>
    </React.StrictMode>,
)
