interface PluginsConstructor<TP, Ssp, Manager> {
    new (ssp: Ssp, manager: Manager): TP;
}
export { PluginsConstructor };
