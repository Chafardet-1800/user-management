export interface ResponseAPI {
    apiVersion:   string;
    trackingCode: string;
    data:         unknown;
    message:      string;
    maintenance:  boolean;
    date:         number;
    langVersion:  null;
    token:        null;
    appVersion:   null;
}