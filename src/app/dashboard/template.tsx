"use client"
import React,{useState} from 'react'


// 切换路由时 template 会重新渲染， layout 不会
// layout 不会渲染仅限于一个大的路由下，完完全全切换路由也重新渲染

export default function Template({children}: {children: React.ReactNode}) {
    const [count, setCount] = useState(0);

    return (
      <div className="border-2 border-dashed border-black p-4 mx-auto mt-10">
        <h2>Dashboard Template {count}</h2>
        <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
        {children}
      </div>
    );
}
