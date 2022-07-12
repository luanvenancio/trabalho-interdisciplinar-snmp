import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineApartment, AiOutlineHome, AiOutlineInfoCircle} from "react-icons/ai";
import { IoGitNetworkOutline } from "react-icons/io5";

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
        icon: <IoGitNetworkOutline />,
        to: "/udp",
        description: "Porcentagem de UDP recebidos, perdidos e enviados",
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
        description: "Identifica o Sistema Operacional",
    },
];

export const optionsInterval = [
    { value: 1000, label: "1 Seg" },
    { value: 2000, label: "2 Seg" },
    { value: 3000, label: "3 Seg" },
    { value: 5000, label: "5 Seg" },
    { value: 7000, label: "7 Seg" },
];