import React from 'react'

interface Props {
    cond: boolean;
    children: JSX.Element
}

const Conditional: React.FC<Props> = ({children, cond}) => {
    return cond ? children : null;
}

export default Conditional;