import { useRef, useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "./Dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

interface CreateContentModalProps {
    open: boolean
    onClose: () => void
}


//Controlled Component
export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState<ContentType>(ContentType.Youtube);
    // const [type, setType] = useState(ContentType.Youtube);


    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

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
    // return <div>
    //     {open &&
    //         <div>
    //             <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>

    //             <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
    //                 <div className="flex flex-col justify-center">
    //                     <span className="bg-white opacity-100 p-4 rounded">
    //                         <div className="flex justify-end">
    //                             <div onClick={onClose} className="cursor-pointer hover:bg-red-600 hover:text-white rounded p-2">
    //                                 <XMark />
    //                             </div>
    //                         </div>
    //                         <div>
    //                             <Input type="text" reference={titleRef} placeholder={"tiltle"} />
    //                             <Input type="text" reference={linkRef} placeholder={"link"} />
    //                             {/* Add react select to select type */}
    //                             <Input type="text" reference={typeRef} placeholder={"type"} />
    //                         </div>
    //                         <div className="flex justify-center">
    //                             <Button onClick={addContent} variant="primary" text="Submit" startIcon={<></>}></Button>
    //                         </div>
    //                     </span>
    //                 </div>
    //             </div>

    //         </div>}

    // </div>

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Add New Content</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Input
                            reference={titleRef}
                            placeholder="Enter title"
                            className="w-full"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            reference={linkRef}
                            placeholder="Enter link"
                            className="w-full"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2">
                        <Select value={type} onValueChange={(value) => setType(value as ContentType)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select content type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={ContentType.Youtube}>YouTube</SelectItem>
                                <SelectItem value={ContentType.Twitter}>Twitter</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex justify-end pt-4">
                        <Button variant="primary" onClick={addContent} text="Submit" />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )

}