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
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer hover:bg-red-600 hover:text-white rounded p-2">
                            <XMark />
                        </div>
                    </div>
                    <div>
                        <Input placeholder={"tiltle"} />
                        <Input placeholder={"link"} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit"></Button>
                    </div>
                </span>
            </div>
        </div>}
    </div>
}