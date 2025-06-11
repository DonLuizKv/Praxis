"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
    socket: Socket | null;
}

const ContextSocket = createContext<SocketContextType | null>(null);

export const useSocket = () => {
    const context = useContext(ContextSocket);
    if (!context) throw new Error("useSocket must be used within a SocketProvider");
    return context;
}

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
            transports: ["websocket"],
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: 5,
        });

        newSocket.on("connect", () => {
            console.log("Connected to server");
        });

        newSocket.on("disconnect", () => {
            console.log("Disconnected from server");
        });
        
        newSocket.on("error", (error) => {
            console.log("Error from server", error);
        });
        
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <ContextSocket.Provider value={{ socket }}>
            {children}
        </ContextSocket.Provider>
    );
}