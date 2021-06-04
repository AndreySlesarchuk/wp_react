import React from 'react'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoItem(props) {
    return <li>{props.title}</li>
}