import React, {useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const CopyButton = ({text = ''}) => {

    const [copied,setCopied] = useState(false);


    return (
        <CopyToClipboard onCopy={(text) =>setCopied(true)} text={'hello world'}>
            <button className={`text-center w-[120px] ${copied ? 'bg-gray-600' : 'bg-primary'}  bg-primary text-white rounded-full p-2 px-5`}>
                {copied ? 'Copied' : 'Copy'}
            </button>
        </CopyToClipboard>
    );
};

export default CopyButton;
