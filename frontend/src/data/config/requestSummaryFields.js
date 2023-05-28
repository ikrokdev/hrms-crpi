// This config holds the fields that should be shown in the request summary action sheet
// TODO: This should be config-driven somehow

export const LEAVE_FIELDS = [
	{
		"fieldname": "employee",
		"label": "Employee",
		"fieldtype": "Link",
	},
	{
		"fieldname": "leave_type",
		"label": "Leave Type",
		"fieldtype": "Link",
	},
	{
		"fieldname": "leave_dates",
		"label": "Leave Dates",
		"fieldtype": "DateRange",
	},
	{
		"fieldname": "half_day",
		"label": "Half Day",
		"fieldtype": "Check",
	},
	{
		"fieldname": "half_day_date",
		"label": "Half Day Date",
		"fieldtype": "Date",
	},
	{
		"fieldname": "total_leave_days",
		"label": "Total Leave Days",
		"fieldtype": "Float",
	},
	{
		"fieldname": "leave_balance",
		"label": "Leave Balance",
		"fieldtype": "Float",
	},
	{
		"fieldname": "status",
		"label": "Status",
		"fieldtype": "Select",
	},
	{
		"fieldname": "description",
		"label": "Reason",
		"fieldtype": "Small Text",
	}
]