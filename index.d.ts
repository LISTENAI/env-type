export = bundle;

declare namespace bundle {
    interface Bundle {
        binaries: string[];
        env: Record<string, string>;
        flasher?: Flasher;
    }

    interface Flasher {
        makeFlashExecArgs(partitions: Record<number, string>, otherArgs?: string[]): FlasherArgs;
    }

    interface FlasherArgs {
        command: string;
        args: string[];
    }
}
