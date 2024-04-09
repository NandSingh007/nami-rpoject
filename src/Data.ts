export interface Task {
    id: number;
    staffName: string;
    taskName: string;
    dateAndTime: string;
    type: 'Guest' | 'Internal';
    status: 'Ongoing' | 'Scheduled' | 'Completed' | 'UnScheduled'| 'Not Accepted' ;
    ScheduledTasks: 'Recurring'| 'One-Time'| "";
    ongoingTasks: 'Ongoing'|'Scheduled'| 'Un-Scheduled' | 'Not Accepted by staff' | 'Not Accepted and delayed' | 'Accepted and On time' | 'Accepted and Delayed' | "";
    star: 1|2|3|4|5| "";
    isComplaint: boolean|"";
    pandingTime: string| "";
}

export const data : Task[] = [
    {
        id: 1234,
        type: 'Guest',
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        status: 'Not Accepted',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Not Accepted by staff',
        star:  "",
        isComplaint: "",
        pandingTime: "20min",
    },
    {
        id: 1239,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'Not Accepted',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Not Accepted and delayed',
        star:  "",
        isComplaint: "",
        pandingTime: "1min",
    },
    {
        id: 1930,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'Ongoing',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Ongoing',
        star:  "",
        isComplaint: "",
        pandingTime: "2min",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'Scheduled',
        ScheduledTasks: '',
        ongoingTasks:   'Not Accepted by staff',
        star:  "",
        isComplaint: "",
        pandingTime: "20min",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'UnScheduled',
        ScheduledTasks: '',
        ongoingTasks:   'Un-Scheduled',
        star:  "",
        isComplaint: "",
        pandingTime: "20min",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Guest',
        status: 'UnScheduled',
        ScheduledTasks: 'One-Time',
        ongoingTasks:   'Un-Scheduled',
        star:  "",
        isComplaint: "",
        pandingTime: "20min",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'UnScheduled',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Un-Scheduled',
        star:  "",
        isComplaint: "",
        pandingTime: "20min",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'UnScheduled',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Un-Scheduled',
        star:  "",
        isComplaint: "",
        pandingTime: "20min",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Guest',
        status: 'UnScheduled',
        ScheduledTasks: 'One-Time',
        ongoingTasks:   'Un-Scheduled',
        star:  "",
        isComplaint: "",
        pandingTime: "20min",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'Completed',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Accepted and Delayed',
        star:  1,
        isComplaint: true,
        pandingTime: "",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Internal',
        status: 'Completed',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Accepted and On time',
        star:  5,
        isComplaint: true,
        pandingTime: "",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Guest',
        status: 'Completed',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Accepted and On time',
        star:  5,
        isComplaint: true,
        pandingTime: "",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Guest',
        status: 'Completed',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Accepted and Delayed',
        star:  "",
        isComplaint: "",
        pandingTime: "",
    },
    {
        id: 1931,
        staffName: "Rajesh",
        taskName: "Routin Cleaning",
        dateAndTime: "12 Jul 2024 | 03:00 am",
        type: 'Guest',
        status: 'Completed',
        ScheduledTasks: 'Recurring',
        ongoingTasks:   'Accepted and Delayed',
        star:  1,
        isComplaint: true,
        pandingTime: "",
    }


]
