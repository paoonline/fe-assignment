"use client";
import useConvertData from "./useConvertData"

export default function Data() {
   const {data} = useConvertData()
    return <div>
        {JSON.stringify(data, null, 2)}
    </div>

}