import { createBrowserRouter } from "react-router-dom";

/* - Páginas públicas ---------- */
import LandingPage from "../_pages/landingPage/landingPage";
import PageNotFound from "../_pages/404";

/* -- Páginas portal -------------------- */
/* - Páginas de conteúdo ---------- */
import Home from "../_pages/home/home";

/* - Páginas de alunos ---------- */
import Students from "../_pages/students/students";

/* - Páginas de cursos ---------- */
import Courses from "../_pages/courses/courses";

/* - Páginas de configurações ---------- */
import Settings from "../_pages/settings/settings";

/* - Páginas de autenticação ---------- */
import Login from "../_pages/auth/Login";
import Register from "../_pages/auth/Register";
import ConfirmRegistration from "../_pages/auth/confirmRegistration";
import ForgotPassword from "../_pages/auth/forgotPassword";
import ResetPassword from "../_pages/auth/resetPassword";

/* -- Páginas aluno -------------------- */
/* - Páginas de autenticação ---------- */
import StudentLogin from "../_mobile/auth/login";
import StudentForgotPassword from "../_mobile/auth/forgotPassword";

const routers = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/home', element: <Home /> },

    { path: '/students', element: <Students /> },

    { path: '/courses', element: <Courses /> },
    
    { path: '/settings', element: <Settings /> },

    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/confirm-registration', element: <ConfirmRegistration /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/reset-password', element: <ResetPassword /> },

    { path: '/mobile/login', element: <StudentLogin /> },
    { path: '/mobile/forgot-password', element: <StudentForgotPassword /> },

    { path: '*', element: <PageNotFound /> },
]);

export default routers;