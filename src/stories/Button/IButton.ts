
export interface IButton { 
    /**
     * Texto a mostrar dentro del boton
    */
    label: string;
    /**
   * Modo del boton del siguiente listado:
   */
    mode: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' ;
        /**
   * Tamaño del boton del siguiente listado:
   */
    size: 'small' | 'medium' | 'large';
            /**
   * Evento Onclick del boton
   */
    onClick: ()=>void;
}