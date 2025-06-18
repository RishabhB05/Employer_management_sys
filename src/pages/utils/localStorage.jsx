const employees = [
  {
    "id": 1,
    "firstName": "John",
    "email": "employee1@company.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete project proposal",
        "description": "Draft and submit the project proposal for client review",
        "date": "2023-06-20",
        "priority": "high"
      },
      {
        "taskNumber": 2,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Team meeting",
        "description": "Attend weekly team meeting",
        "date": "2023-06-15",
        "priority": "medium"
      },
      {
        "taskNumber": 3,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Update documentation",
        "description": "Update user manual for new features",
        "date": "2023-06-10",
        "priority": "low"
      },
      {
        "taskNumber": 4,
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Bug fix",
        "description": "Fix critical bug in login module",
        "date": "2023-06-18",
        "priority": "high"
      }
    ],
    "taskCounts": {
      "total": 4,
      "active": 3,
      "new": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Sarah",
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Client presentation",
        "description": "Prepare slides for client presentation",
        "date": "2023-06-22",
        "priority": "high"
      },
      {
        "taskNumber": 2,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Code review",
        "description": "Review pull requests from junior developers",
        "date": "2023-06-16",
        "priority": "medium"
      },
      {
        "taskNumber": 3,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Training session",
        "description": "Attend new framework training",
        "date": "2023-06-12",
        "priority": "low"
      }
    ],
    "taskCounts": {
      "total": 3,
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Michael",
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Database optimization",
        "description": "Optimize SQL queries for better performance",
        "date": "2023-06-25",
        "priority": "medium"
      },
      {
        "taskNumber": 2,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "API documentation",
        "description": "Write documentation for new API endpoints",
        "date": "2023-06-19",
        "priority": "medium"
      },
      {
        "taskNumber": 3,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Server maintenance",
        "description": "Perform routine server maintenance",
        "date": "2023-06-14",
        "priority": "low"
      },
      {
        "taskNumber": 4,
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Feature implementation",
        "description": "Implement user profile feature",
        "date": "2023-06-17",
        "priority": "high"
      },
      {
        "taskNumber": 5,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Security audit",
        "description": "Conduct security audit of application",
        "date": "2023-06-28",
        "priority": "high"
      }
    ],
    "taskCounts": {
      "total": 5,
      "active": 3,
      "new": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Emily",
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "UX redesign",
        "description": "Redesign user interface for better usability",
        "date": "2023-06-30",
        "priority": "high"
      },
      {
        "taskNumber": 2,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "User testing",
        "description": "Conduct user testing sessions",
        "date": "2023-06-21",
        "priority": "medium"
      },
      {
        "taskNumber": 3,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Prototype creation",
        "description": "Create wireframe prototypes",
        "date": "2023-06-13",
        "priority": "low"
      },
      {
        "taskNumber": 4,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Competitor analysis",
        "description": "Analyze competitor products",
        "date": "2023-06-23",
        "priority": "medium"
      },
      {
        "taskNumber": 5,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Design system update",
        "description": "Update design system components",
        "date": "2023-06-11",
        "priority": "low"
      },
      {
        "taskNumber": 6,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Accessibility audit",
        "description": "Check compliance with WCAG guidelines",
        "date": "2023-06-27",
        "priority": "high"
      }
    ],
    "taskCounts": {
      "total": 6,
      "active": 4,
      "new": 2,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "David",
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Budget planning",
        "description": "Prepare budget for next quarter",
        "date": "2023-06-24",
        "priority": "high"
      },
      {
        "taskNumber": 2,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Hiring interviews",
        "description": "Conduct interviews for new positions",
        "date": "2023-06-16",
        "priority": "medium"
      },
      {
        "taskNumber": 3,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Team building event",
        "description": "Organize quarterly team building",
        "date": "2023-06-09",
        "priority": "low"
      },
      {
        "taskNumber": 4,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Performance reviews",
        "description": "Complete employee performance reviews",
        "date": "2023-06-26",
        "priority": "high"
      },
      {
        "taskNumber": 5,
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Vendor negotiation",
        "description": "Negotiate contract with new vendor",
        "date": "2023-06-15",
        "priority": "medium"
      },
      {
        "taskNumber": 6,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Policy update",
        "description": "Update company remote work policy",
        "date": "2023-06-29",
        "priority": "medium"
      },
      {
        "taskNumber": 7,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Office supplies",
        "description": "Order new office supplies",
        "date": "2023-06-08",
        "priority": "low"
      },
      {
        "taskNumber": 8,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Quarterly report",
        "description": "Prepare quarterly financial report",
        "date": "2023-06-30",
        "priority": "high"
      }
    ],
    "taskCounts": {
      "total": 8,
      "active": 5,
      "new": 2,
      "completed": 2,
      "failed": 1
    }
  }
];

const admin = [  
  {
    "id": 100,
    "firstName": "Rishabh",
    "email": "admin@company.com",
    "password": "123",
    "taskCounts": {
      "total": 0,
      "active": 0,
      "new": 0,
      "completed": 0,
      "failed": 0
    }
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  return {  
    employees: JSON.parse(localStorage.getItem('employees')) || [],
    admin: JSON.parse(localStorage.getItem('admin')) || null
  };
};