export interface DialogModel {
    title: string;
    message: string;
    cancelText: string;
    confirmText: string;
    classButton?:     | ""
    | "icon"
    | "white"
    | "confirm"
    | "cancel"
    | "warning"
    | "outline-confirm"
    | "outline-cancel"
    | "outline-warning";
    onConfirm: (data: object) => void;
    config: FormInputConfigModel[];
}
    
export interface FormInputConfigModel {
    name: string;
    type: string;
    value: string;
    placeholder: string;
    required: boolean;
    fullWidth: boolean;
    style: string;
}