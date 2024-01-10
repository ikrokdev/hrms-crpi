// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
frappe.views.calendar["Attendance"] = {
	options: {
		header: {
			left: "prev, title, next",
			right: "today, month, agendaWeek, agendaDay",
		},
		
		displayEventTime: false,
		
	},
	field_map: {
		start: "attendance_date",
		end: "attendance_date",
		title: "employee_name",
		allDay: 1,
		
	},

	other_fields: [
		"status",
		"leave_type"
	],
	get_events_method: 'frappe.desk.calendar.get_events'
}
