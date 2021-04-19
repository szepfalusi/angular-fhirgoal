export interface Goal {
    identifier?: Identifier[];
    lifecycleStatus: "proposed" | "planned" | "accepted" | "active" | "on-hold" | "completed" | "cancelled" | "entered-in-error" | "rejected";
    achievementStatus?: CodeableConcept;
    category?: CodeableConcept[];
    priority?: CodeableConcept;
    description?: CodeableConcept;
    subject: string;
    startDate?: Date;
    target?: target[];
    statusDate?: Date;
    statusReason?: string;
    expressedBy?: string;
    addresses?: string[];
    note?: Annotation[];
    outcomeCode?: CodeableConcept[];
    outcomeReference?: string[];
}

export interface target {
    measure?: CodeableConcept;
    detail?: string;
    dueDate: Date;
}

export interface Identifier {
    use?: "usual" | "official" | "temp" | "secondary" | "old";
    type?: CodeableConcept;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: string;
}

export interface CodeableConcept {
    coding?: Coding[];
    text: string;
}

export interface Coding {
    system?: string;
    version?: string;
    code?: Period;
    display?: string;
    userSelected?: boolean;
}

export interface Period {
    start?: Date;
    end?: Date;
}

export interface Annotation {
    author?: string;
    time?: Date;
    text: string;
}