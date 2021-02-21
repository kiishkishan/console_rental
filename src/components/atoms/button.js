import React from 'react';
import styled, {css} from 'styled-components';
import {Button} from 'react-bootstrap'
import { theme } from '../../services/theme';

const ContainedButton = styled(Button)`
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    padding: 0.725rem 1.75rem;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .1rem;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    outline: 0;
    border: none
    ${props => props.variant === 'primary' && css`
        background: ${theme.colors.primary};
        color: white;
        outline: none;
        
        &:hover {
        background-color: ${theme.colors.secondary} !important;
        box-shadow: 1 4px 8px 0 rgba(196, 196, 196, 0.5) !important;
        -webkit-box-shadow:   1 4px 8px 0 rgba(196, 196, 196, 0.5) !important;;
        -moz-box-shadow:   1 4px 8px 0 rgba(196, 196, 196, 0.5) !important;
        border: none
    } 
  `}
  ${props => props.variant === 'secondary' && css`
        background: ${theme.colors.secondary};
        color: white;
        outline: none;
        &:hover {
        background-color: ${theme.colors.primary} !important;
        box-shadow: 1 4px 8px 0 rgba(196, 196, 196, 0.5) !important;
        -webkit-box-shadow:   1 4px 8px 0 rgba(196, 196, 196, 0.5) !important;;
        -moz-box-shadow:   1 4px 8px 0 rgba(196, 196, 196, 0.5) !important;
        border: none
    } 
  `}
  
   

`

export const PrimaryButton = ({Child, variant}) => {
   return <ContainedButton variant={variant}>{Child}</ContainedButton>
}
