import { MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { AiOutlineApartment, AiOutlineHome } from "react-icons/ai";

export const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
    },
    {
        label: "Monitor de TCP",
        icon: <BsPeople />,
        to: "/tcp",
        description: "Monitor de TCP",
    },
    {
        label: "Uso da Memória",
        icon: <MdOutlineAnalytics />,
        to: "/memory",
        description: "Monitor de TCP",
    },
    {
        label: "Monitor de Processos",
        icon: <BsPeople />,
        to: "/process",
        description: "Monitor de TCP",
    },
    {
        label: "Versão do Sistema",
        icon: <AiOutlineApartment />,
        to: "/version",
        description: "Monitor de TCP",
    },
];

export const optionsInterval = [
    { value: 1000, label: "1 Seg" },
    { value: 2000, label: "2 Seg" },
    { value: 3000, label: "3 Seg" },
    { value: 5000, label: "5 Seg" },
    { value: 7000, label: "7 Seg" },
];