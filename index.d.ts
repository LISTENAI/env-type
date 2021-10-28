export = bundle;

declare namespace bundle {
    interface Bundle {
        binaries: string[];
        env: Record<string, string>;
    }
}
