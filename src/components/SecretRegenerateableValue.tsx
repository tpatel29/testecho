import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'


export function SecretRegenerateableValue({ name, val, regenerate }: { name: string, val: string, regenerate: Function }) {
    const [value, setValue] = useState(val)
    const [show, setShow] = useState(false)

    const mutation = useMutation({
        mutationFn: _ => regenerate(),
        onSuccess(data: any, variables: any, context: any) {
            setValue(data)
        },
    })


    if(!show) {
        return (
            <div>
                <p>{name}</p>
                <span>************************</span>
                <button onClick={_ => setShow(true)}>Show</button>
            </div>
        )
    }

    return (
        <div>
            <p>{name}</p>
            <span>{value}</span>
            <button onClick={_ => setShow(false)}>Hide</button>
            <button onClick={_ => mutation.mutate()}>Regenerate</button>
        </div>
    )
}

