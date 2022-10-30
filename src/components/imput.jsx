import { Envelope, Keyhole, User, Phone, Confetti } from "phosphor-react";
import React from "react";

export function Email(props){
    return(
       <div>
        <span className="text-white text-sm">{props.title}:</span>
        <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Envelope className="text-white w-[20px] h-[20px] " ></Envelope>
        </span>
        <input className="text-xm placeholder:text-sm placeholder:text-gray-100 block bg-gray-500 w-[380px] rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-cian-400 focus:ring-1 text-white " placeholder={`${props.placeholder}`} type="text" name="search"/>
      </label>
    </div>
    )
}

export function Senha(props){
    return(
       <div>
        <span className="text-white text-sm">{props.title}:</span>
        <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Keyhole className="text-white w-[20px] h-[20px] " ></Keyhole>
        </span>
        <input className="text-xm placeholder:text-sm placeholder:text-gray-100 block bg-gray-500 w-[380px] rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-cian-400 focus:ring-1 text-white " placeholder={`${props.placeholder}`} type="text" name="search"/>
      </label>
    </div>
    )
}    

export function Nome(props){
    return(
       <div>
        <span className="text-white text-sm">{props.title}:</span>
        <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <User className="text-white w-[20px] h-[20px] " ></User>
        </span>
        <input className="text-xm placeholder:text-sm placeholder:text-gray-100 block bg-gray-500 w-[380px] rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-cian-400 focus:ring-1 text-white " placeholder={`${props.placeholder}`} type="text" name="search"/>
      </label>
    </div>
    )
}

export function Telefone(props){
    return(
       <div>
        <span className="text-white text-sm">{props.title}:</span>
        <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Phone className="text-white w-[20px] h-[20px] " ></Phone>
        </span>
        <input className="text-xm placeholder:text-sm placeholder:text-gray-100 block bg-gray-500 w-[380px] rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-cian-400 focus:ring-1 text-white " placeholder={`${props.placeholder}`} type="text" name="search"/>
      </label>
    </div>
    )
}

export function Data(props){
    return(
       <div>
        <span className="text-white text-sm">{props.title}:</span>
        <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Confetti className="text-white w-[20px] h-[20px] " ></Confetti>
        </span>
        <input className="mr-[200px] text-xm placeholder:text-sm placeholder:text-gray-100 block bg-gray-500 w-[180px] rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-cian-400 focus:ring-1 text-white " placeholder={`${props.placeholder}`} type="text" name="search"/>
      </label>
    </div>
    )
}