import React from 'react'

export default function Photo(props) {
    return (
        <div>
            <div>
                <img src={props.src} width={props.width} alt="" />
            </div>
            {props.children}
        </div>
    )
}
