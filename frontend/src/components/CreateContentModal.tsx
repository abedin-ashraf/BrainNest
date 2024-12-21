import { useRef, useState } from "react"
import { XMark } from "../icons/XIcon"
import { Input } from "./Input"
import { Button } from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

//Controlled Component
export function CreateContentModal({ open, onClose }: { open: boolean, onClose: () => void }) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const typeRef = useRef<HTMLInputElement>();
    // const [type, setType] = useState(ContentType.Youtube);


    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = typeRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            type,
            title
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();

    }
    return <div>
        {open &&
            <div>
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>

                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4 rounded">
                            <div className="flex justify-end">
                                <div onClick={onClose} className="cursor-pointer hover:bg-red-600 hover:text-white rounded p-2">
                                    <XMark />
                                </div>
                            </div>
                            <div>
                                <Input reference={titleRef} placeholder={"tiltle"} />
                                <Input reference={linkRef} placeholder={"link"} />
                                {/* Add react select to select type */}
                                <Input reference={typeRef} placeholder={"type"} />
                            </div>
                            <div className="flex justify-center">
                                <Button onClick={addContent} variant="primary" text="Submit" startIcon={<></>}></Button>
                            </div>
                        </span>
                    </div>
                </div>

            </div>}

    </div>
}