import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ClassIcon from '@mui/icons-material/Class';
import ScoreIcon from '@mui/icons-material/Score';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/inicio"
    },
    {
        title: "Estudiantes",
        icon: <PeopleIcon/>,
        link: "/estudiantes"
    },
    {
        title: "Cursos",
        icon: <ClassIcon/>,
        link: "/cursos"
    },
    {
        title: "Profesores",
        icon: <EmojiPeopleIcon/>,
        link: "/profesores"
    },
    {
        title: "Calificaciones",
        icon: <ScoreIcon/>,
        link: "/calificaciones"
    },
    {
        title: "Reportes",
        icon: <LibraryBooksIcon/>,
        link: "/reportes"
    },
    {
        title: "Configuración",
        icon: <SettingsIcon/>,
        link: "/configuracion"
    },
    {
        title: "Cerrar Sesión",
        icon: <LogoutIcon/>,
        link: "/cerrar-sesion"
    }
] 

