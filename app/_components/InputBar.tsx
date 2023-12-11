"use client";

import { usePersonStore } from '@/store';
import React from 'react'

function InputBar() {
    const updateFirstName = usePersonStore((state) => state.updateFirstName);
    return (
        <div>
            <label htmlFor="firstName">
                First Name:
                <input type="text" id="firstName" name="firstName" onChange={(e) => updateFirstName(e.target.value)} />
            </label>
        </div>
    )
}

export default InputBar