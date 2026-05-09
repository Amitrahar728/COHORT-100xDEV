




export function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
        return <div>
            <SubOtpBox onDone ={()=>{
                ref1.current.focus();
            }} />
            <SubOtpBox onDone ={()=>{
                ref2.current.focus();
            }}/>
            <SubOtpBox onDone ={()=>{
                ref3.current.focus();
            }}/>
            <SubOtpBox onDone ={()=>{
                ref4.current.focus();
            }} />
            <SubOtpBox onDone ={()=>{
                ref5.current.focus();
            }} />
            <SubOtpBox onDone ={()=>{
                ref6.current.focus();
            }} />
            
        </div>
}


function SubOtpBox({ref , unDone}){
    return <div>
        <input ref = {ref} onChange= {(e)=>{
            onDone()
        }}  type="text"className = "m-1 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none" />
        
    </div>

}