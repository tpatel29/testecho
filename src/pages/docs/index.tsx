import React from 'react'
import '../../styles/docs.css';
import '../../styles/home-styles.css';
import CodeBlock from "./CodeBlock";
import Navbar from "../home/navbar"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export default function Docs() {
    const codeString = `
        <div>
            <h1>Docs</h1>
            <div >
                <pre style={{background:"black", color:"white", width:"50%" ,border:"white 5px solid", borderRadius:"20px"}} >
                    <div>
                        <h1>Here</h1>
                    </div>
                </pre>
            </div>
        </div>
    `
    return(
        // <div style={{width:"50%", }}>
        //     <Navbar/>
        //     <CodeBlock code={codeString} showLineNumbers={true} language={"javascript"}/>
        //     <Sidenav/>
        // </div>
        <div className={"test"}>
        <Sidebar>
            <Menu>
                <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
        </div>
    )

    // return (
    //     <div>
    //         <h1>Docs</h1>
    //         <div >
    //             <pre className="line-numbers" style={{background:"rgb(11, 72, 107)", color:"white", width:"50%" ,border:"white 5px solid", borderRadius:"10px"}} >
    //                <code className="language-css">
    //                   p
    //                </code>
    //             </pre>
    //         </div>
    //     </div>
    //
    // )
}
