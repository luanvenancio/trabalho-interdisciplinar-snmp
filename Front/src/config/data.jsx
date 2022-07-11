import { MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { AiOutlineApartment, AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";

export const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
    },
    {
        label: "Monitor TCP",
        icon: <AiOutlineApartment />,
        to: "/tcp",
        description: "Número de conexões TCP estabelecidas",
    },
    {
        label: "Monitor UDP",
        icon: <BsPeople />,
        to: "/memory",
        description: "Monitor de TCP",
    },
    {
        label: "Monitor de Processos",
        icon: <MdOutlineAnalytics />,
        to: "/process",
        description: "Número de processos rodando no sistema",
    },
    {
        label: "Versão do Sistema",
        icon: <AiOutlineInfoCircle />,
        to: "/version",
        description: "Identifica Sistema Operacional",
    },
];

export const optionsInterval = [
    { value: 1000, label: "1 Seg" },
    { value: 2000, label: "2 Seg" },
    { value: 3000, label: "3 Seg" },
    { value: 5000, label: "5 Seg" },
    { value: 7000, label: "7 Seg" },
];