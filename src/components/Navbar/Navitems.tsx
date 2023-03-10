import React from 'react';
import Link from "next/link"
import { Menu } from '@headlessui/react';

type NavitemsProps = {
    url: string
    title: string
    isSelected: boolean
};

function Navitems(props: NavitemsProps) {
    const { url, title, isSelected } = props


    return (
        <li>
            <Link href={url} className={`block relative px-3 py-2 transition hover:text-blue-400 ${isSelected ? "text-blue-400" : ""}`}>{title}</Link>
        </li>
    )
}
export default Navitems;