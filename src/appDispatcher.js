import { Dispatcher } from "flux";
/**
 * it's sigleton
 * there should be only one dispatcher
 * for applicaton
 */
const dispatcher = new Dispatcher();
export default dispatcher;
