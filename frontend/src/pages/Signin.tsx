import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = ()=>{
    return <div className="grid lg:grid-cols-2">
        <div>
            <Auth type="signin"></Auth>
        </div>
        <div className="hidden lg:block">
            <Quote></Quote>
        </div>
    
    </div>
}