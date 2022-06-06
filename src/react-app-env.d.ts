/// <reference types="react-scripts" />

declare module "*.png" {
    const value: any;
    export = value;
}

declare module '*.less' {
    const resource: {[key: string]: string};
    export = resource;
}

