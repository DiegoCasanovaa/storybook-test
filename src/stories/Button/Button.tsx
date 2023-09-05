import React from "react";
import { IButton } from "./IButton";
import './button.css';

export const Button: React.FC <IButton>= ({ label, mode, onClick, size})=>{ 

    const handleMode = (modeSelected:string)=>{ 

        switch (modeSelected) {
            case 'primary':
                return 'storybook-button--primary';
            case 'secondary':
                return 'storybook-button--secondary';
            case 'tertiary':
                return 'storybook-button--tertiary';
            case 'success':
                return 'storybook-button--success';
            case 'error':
                return 'storybook-button--error';
        
            default:
                break;
        }
    }

    const modeParse = handleMode(mode)
    
    return(
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, modeParse].join(' ')}
            onClick={onClick}
        >
            {label}
        </button>
    );
}