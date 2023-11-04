    
    // Github-calendar    
    GitHubCalendar(".react-activity-calendar", "ranjeetgupta1995");

    // or enable responsive functionality:
    GitHubCalendar(".react-activity-calendar", "ranjeetgupta1995", { responsive: true });

    // Use a proxy
    GitHubCalendar(".react-activity-calendar", "your-username", {
       proxy (ranjeetgupta1995) {
         return fetch(`https://your-proxy.com/github?user=${ranjeetgupta1995}`)
       }
    }).then(r => r.text())