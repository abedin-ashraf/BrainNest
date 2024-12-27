import { DeleteIcon } from "../icons/DeleteIcon";
import { ExternalOpen } from "../icons/ExternalOpen";
import { ShareIcon } from "../icons/ShareIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface CardProps {
    id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({ id, title, link, type }: CardProps) {

    function deletePost() {
        axios.delete(`${BACKEND_URL}/api/v1/contentDelete`, {
            headers: {
                "authorization": localStorage.getItem("token")
            },
            data: {
                contentId: id
            }
        })
    }


    return <div>
        <div className="p-4 bg-white rounded-md border border-gray-200 max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="pr-2 text-gray-500"><ShareIcon /></div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ExternalOpen />
                        </a>
                    </div>
                    <div className="text-gray-500 cursor-pointer" onClick={deletePost}><DeleteIcon /></div>
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace('x.com', "twitter.com")}></a>
                </blockquote>}

            </div>

        </div>
    </div>
}