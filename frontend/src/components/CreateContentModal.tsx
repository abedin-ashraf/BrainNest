import { useState } from "react"
import { XMark } from "../icons/XIcon"
import { Input } from "./Input"
import { Button } from "./Button"

//Controlled Component
export function CreateContentModal({ open, onClose }) {

    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end"><XMark /></div>
                    <div>
                        <Input placeholder={"tiltle"} />
                        <Input placeholder={"link"} />
                    </div>
                    <Button variant="primary" text="Submit"></Button>
                </span>
            </div>
        </div>}
    </div>
}