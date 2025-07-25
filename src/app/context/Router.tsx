"use client"
import { createContext, useMemo, useState, ReactNode } from "react";

export interface PageContext {
    page1: string;
    page2: string;
    summary: string
}

export const pageContext = {
    page1: "page1",
    page2: "page2",
    summary: "summary"
}

interface RouterContext {
    page: string;
    setPage: (page: string) => void;
}


export const RouterContext = createContext<RouterContext>({ page: pageContext.page1, setPage: () => {} });

const url = window.location.pathname.slice(1).toLowerCase();
export const RouterProvider = ({children} : {children : ReactNode}) => {

    const [page, setPage] = useState(pageContext.page1);
    console.log("Router: ",page);
    const value = useMemo(() => {
        return ({
            page,
            setPage
        })
    }, [page, setPage]);

    return (
        <RouterContext.Provider value={value}>
            {children}
        </RouterContext.Provider>
    )
}