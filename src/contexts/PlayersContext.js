import { createContext } from "react";

export const PlayersContext = createContext({
    currentUID: "null",
    p1: "white",
    p2: "white",
    p3: "white",
    p4: "white",
});