import {Link} from "react-router-dom"

interface BlogCardProps{
    authorName: string,
    title:string,
    content:string,
    publishDate: string,
    id:number
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishDate
}: BlogCardProps)=>{
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex items-center">
                    <div>
                        <Avatar name={authorName} size={5}/>
                    </div>
                
                <div className="pl-2 font-medium	text-sm" >{authorName}</div> 
                <div className="flex items-center px-2"><Circle/></div>
                <div className="font-normal text-gray-500 text-sm">{publishDate}</div>
                </div>
                <div className="font-bold text-2xl pt-3">
                    {title}
                </div>
                <div>
                    {content.slice(0,100) + "..."}
                </div>
                <div className="pt-8">
                    {`${Math.ceil(content.length/100)} minutes`}
                </div>
        </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}
export function Circle(){
    return <div className="w-1 h-1 bg-gray-400 rounded-full">

    </div>
}