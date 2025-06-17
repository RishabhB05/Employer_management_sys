const employees = [
  {
    "id": 1,
    "email": "employee1@company.com",
    "password": "123",
    "tasks": [
      {
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
        "active": true,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Bug fix",
        "description": "Fix critical bug in login module",
        "date": "2023-06-18",
        "priority": "high"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
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
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Training session",
        "description": "Attend new framework training",
        "date": "2023-06-12",
        "priority": "low"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
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
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Security audit",
        "description": "Conduct security audit of application",
        "date": "2023-06-28",
        "priority": "high"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
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
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Accessibility audit",
        "description": "Check compliance with WCAG guidelines",
        "date": "2023-06-27",
        "priority": "high"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
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
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Quarterly report",
        "description": "Prepare quarterly financial report",
        "date": "2023-06-30",
        "priority": "high"
      }
    ]
  }
]

const admin = [  
  {
    "id": 100,
    "email": "admin@company.com",
    "password": "123" 
  }
]




export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees ) )
    localStorage.setItem('admin',JSON.stringify(admin) )
}

export const getLocalStorage = () => {
   return {  
     employees: JSON.parse(localStorage.getItem('employees')) || [],
     admin: JSON.parse(localStorage.getItem('admin')) || null
   };
}