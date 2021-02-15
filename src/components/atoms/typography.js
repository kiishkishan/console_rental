import React from 'react';

export const H1 = ({Child}) => {
    return <h1>{Child}</h1>
}

export const H2 = ({Child}) => {
    return <h2>{Child}</h2>
}

export const H3 = ({Child}) => {
   return <h3>{Child}</h3>
}

export const H4 = ({Child}) => {
   return <h4>{Child}</h4>
}

export const H5 = ({Child}) => {
   return <h5>{Child}</h5>
}

export const H6 = ({Child}) => {
   return <h6>{Child}</h6>
}

export const Body = ({Child, variant}) => {
   return <p className={variant}>{Child}</p>
}