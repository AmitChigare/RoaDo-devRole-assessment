interface UserLog {
  userId: string;
  loggedInAt: Date;
  loggedOutAt: Date;
  lastSeenAt: Date;
}

// Sample user log data - I have used the same fields defined in the task
const userLogs: UserLog[] = [
  {
    userId: "user1",
    loggedInAt: new Date("2024-01-15"),
    loggedOutAt: new Date("2024-01-20"),
    lastSeenAt: new Date("2024-01-18"),
  },
  {
    userId: "user2",
    loggedInAt: new Date("2024-02-05"),
    loggedOutAt: new Date("2024-02-10"),
    lastSeenAt: new Date("2024-02-08"),
  },
];

// Function to calculate monthly logged-in users
function calculateMonthlyLoggedInUsers(
  userLogs: UserLog[]
): Map<string, Set<string>> {
  const monthlyLoggedInUsers = new Map<string, Set<string>>();

  for (const log of userLogs) {
    const month = log.loggedInAt.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!monthlyLoggedInUsers.has(month)) {
      monthlyLoggedInUsers.set(month, new Set<string>());
    }
    monthlyLoggedInUsers.get(month)!.add(log.userId);
  }

  return monthlyLoggedInUsers;
}

// Function to calculate monthly active users
function calculateMonthlyActiveUsers(
  userLogs: UserLog[]
): Map<string, Set<string>> {
  const monthlyActiveUsers = new Map<string, Set<string>>();

  for (const log of userLogs) {
    const month = log.loggedInAt.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!monthlyActiveUsers.has(month)) {
      monthlyActiveUsers.set(month, new Set<string>());
    }
    monthlyActiveUsers.get(month)!.add(log.userId);

    if (log.lastSeenAt.getMonth() === log.loggedInAt.getMonth()) {
      monthlyActiveUsers.get(month)!.add(log.userId);
    }
  }

  return monthlyActiveUsers;
}

// ******************************************************************
// Trying with an example
const monthlyLoggedInUsers = calculateMonthlyLoggedInUsers(userLogs);
const monthlyActiveUsers = calculateMonthlyActiveUsers(userLogs);

console.log("Monthly Logged-In Users:");
for (const [month, users] of monthlyLoggedInUsers) {
  console.log(`${month}: ${users.size}`);
}

console.log("\nMonthly Active Users:");
for (const [month, users] of monthlyActiveUsers) {
  console.log(`${month}: ${users.size}`);
}
// ******************************************************************
