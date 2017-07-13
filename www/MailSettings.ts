class MailSettings {
    public emailFrom: string;
    public emailTo: string;
    public subject: string;
    public textBody: string;
    public smtp: string;
    public port: number;
    public sport: number;
	public auth: boolean;
	public ssl: boolean;
	public smtpUserName: string;
    public smtpPassword: string;
    public smtpRequiresAuth: boolean;
    public attachments: Array<string>;
	
 
    constructor(mailSettings: any = undefined) {
        if (mailSettings != undefined) {
            this.emailFrom = mailSettings.emailFrom;
            this.emailTo = mailSettings.emailTo;
            this.smtp = mailSettings.smtp;
            this.port = mailSettings.port;
			this.sport = mailSettings.sport;
			this.auth = mailSettings.auth;
			this.ssl = mailSettings.ssl;
            this.smtpUserName = mailSettings.smtpUserName;
            this.smtpPassword = mailSettings.smtpPassword;
            this.attachments = mailSettings.attachments;
            this.subject = mailSettings.subject;
            this.textBody = mailSettings.textBody;
        }
    }
}

 

