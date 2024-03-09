import React, {useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const CopyButton = ({text = ''}) => {

    const [copied,setCopied] = useState(false);


    return (
        <CopyToClipboard onCopy={(text) =>setCopied(true)} text={text}>
            <button className={`text-center w-full lg:w-[120px] ${copied ? 'bg-[#242028]' : 'bg-primary hover:bg-primary-700'}  text-white rounded-md lg:rounded-full p-2 px-5`}>
                {copied ? 'Copied' : 'Copy'}
            </button>
        </CopyToClipboard>
    );
};

export default CopyButton;
