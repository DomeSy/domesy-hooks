import { createContext } from "react";
import { SelectGroupConnextType } from "./interface.d";

const GroupContext = createContext<SelectGroupConnextType | null>(null);

export default GroupContext;
