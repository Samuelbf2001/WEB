import { useSyncExternalStore } from "react";
import { getDictionaryVersion, subscribeToDictionary } from "./dictionary";

/**
 * Cambia de valor cuando el diccionario en inglés termina de cargarse.
 *
 * Los consumidores que derivan texto de `translateCopy` (los metadatos SEO, el
 * traductor del DOM) lo incluyen en sus dependencias para volver a evaluarse
 * una vez el diccionario está disponible.
 */
export const useDictionaryVersion = () =>
  useSyncExternalStore(subscribeToDictionary, getDictionaryVersion, getDictionaryVersion);
