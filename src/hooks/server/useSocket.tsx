"use client"
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
    socket: Socket | null;
    connected: boolean;
}

const ContextSocket = createContext<SocketContextType | null>(null);

export const useSocket = () => {
    const ctx = useContext(ContextSocket);
    if (!ctx) {
        throw new Error("useSocket debe usarse dentro de <SocketProvider>");
    }
    return ctx;
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const socketref = useRef<Socket | null>(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        // Crear solo UNA instancia del socket
        const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL as string, {
            autoConnect: true,
            // transports: ["websocket"], // evita polling si quieres más estabilidad
            reconnection: true,
            reconnectionAttempts: 10,
            reconnectionDelay: 1000,
            // withCredentials: true, // si usas cookies
        });

        socketref.current = socket;

        // Eventos principales
        socket.on("connect", () => {
            console.log("🔵 Socket conectado:", socket.id);
            setConnected(true);
        });

        socket.on("disconnect", (reason) => {
            console.warn("🟠 Socket desconectado:", reason);
            setConnected(false);
        });

        socket.on("error", (err) => {
            console.error("🔴 Error de conexión:", err.message);
        });

        socket.on("reconnect_attempt", () => {
            console.log("Intentando reconectar...");
        });

        return () => {
            console.log("Cerrando socket por unmount del provider");
            socket.disconnect();
        };
    }, []);

    return (
        <ContextSocket.Provider value={{ socket: socketref.current, connected }}>
            {children}
        </ContextSocket.Provider>
    );
};
